import {
    Component,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    NgZone,
    Inject,
    forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import 'rxjs/add/operator/toPromise';

import * as JQuery from 'jquery';

@Component({
    selector: 'ng2-summernote',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Ng2Summernote),
            multi: true
        }
    ],
    template: `<div class="summernote"></div>`,
})

export class Ng2Summernote {

    @Input() height: number;
    @Input() minHeight: number;
    @Input() maxHeight: number;
    @Input() placeholder: string;
    @Input() focus: boolean;
    @Input() airMode: boolean;
    @Input() dialogsInBody: string;
    @Input() editable: boolean;
    @Input() lang: string;
    @Input() disableResizeEditor: string;
    @Input() serverImgUp: boolean;
    @Input() config: any;

    /** URL for upload server images */
    @Input() hostUpload: string;

    /** Uploaded images server folder */
    @Input() uploadFolder: string = "";

    @Output() change = new EventEmitter<any>();

    private _config: any;

    private _value: any;

    constructor(
        @Inject(ElementRef) private _elementRef: ElementRef,
        private _zone: NgZone,
    ) { }

    get value(): any { return this._value; };
    @Input() set value(v) {
        if (v !== this._value) {
            this._value = v;
            this._onChangeCallback(v);
        }
    }

    ngAfterViewInit() {
        $(this._elementRef.nativeElement).find('.summernote').summernote(this._config);
    }

    /**
     * Value update process
     */
    updateValue(value: any) {
        this._zone.run(() => {
            this._value = value;

            this.onChange(value);
            this._onTouchedCallback();
            this.change.emit(value);
        });
    }

    ngOnDestroy() { }

    private _imageUpload(dataUpload: any) {
        if (dataUpload.editable) {
            let data = new FormData();
            data.append("file", dataUpload.files[0]);
            data.append("action", "upload");
            data.append("image", "resizeNoThumb");
            data.append("folder", this.uploadFolder);
            $.post({
                data: data,
                type: "POST",
                url: this.hostUpload,
                cache: false,
                contentType: false,
                processData: false,
                success: (uploadedImg: any) => {
                    let insertImg = $('<img style="width: 100%;" src="' + uploadedImg.data[0].fileName + '" />');
                    $(this._elementRef.nativeElement).find('.summernote').summernote('insertNode', insertImg[0]);
                    console.log("Uploaded image: " + uploadedImg.data[0]);
                },
                error: (err: any) => { this._errHandle(err) }
            });
        }
    }

    /**
     * Set logical varibles from text input values
     * 
     * @param any variable, logic varible for setting
     * @param boolean defaultValue, this value will be set if variable is not set
     * 
     * @return boolean variable, finally setted variable value
     */
    private _setLogicVars(variable: any, defaultVal?: boolean) {
        variable = typeof variable !== 'undefined' ? true : false;
        if (!variable && defaultVal) variable = defaultVal;

        return variable;
    }


    /**
     * Hanle error in console
     */
    private _errHandle(err: any) {
        console.error("Error");
        console.log(err);
    }

    /**
     * Implements ControlValueAccessor
     */
    writeValue(value: any) {
        if (value) {
            this._value = value;

            this.height = Number(this.height);

            this.editable = this._setLogicVars(this.editable, true);

            this.lang = $.summernote.lang[this.lang] ? this.lang : 'en-US'

            this._config = this.config || {
                height: this.height || 200,
                minHeight: Number(this.minHeight) || this.height || 200,
                maxHeight: Number(this.maxHeight) || this.height || 500,
                placeholder: this.placeholder || 'Text...',
                focus: this._setLogicVars(this.focus, false),
                airMode: this._setLogicVars(this.airMode, false),
                dialogsInBody: this._setLogicVars(this.dialogsInBody, false),
                editable: this.editable,
                lang: this.lang,
                disableResizeEditor: this._setLogicVars(this.disableResizeEditor, false)
            };

            this._config.callbacks = {
                onChange: (evt: any) => {
                    this.updateValue(evt);
                },
                onInit: (evt: any) => { }
            };

            if (typeof this.serverImgUp !== 'undefined') {
                this._config.callbacks.onImageUpload = (files: string) => {
                    this._imageUpload({ files: files, editable: this.editable });
                };
            }

            $(this._elementRef.nativeElement).find('.summernote').summernote(this._config);
            $(this._elementRef.nativeElement).find('.summernote').summernote('code', value);
        }
    }
    onChange(_: any) { }
    onTouched() { }
    registerOnChange(fn: any) { this.onChange = fn; }
    registerOnTouched(fn: any) { this.onTouched = fn; }
    _onChangeCallback(_: any) { }
    _onTouchedCallback() { }
}