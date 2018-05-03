// Type definitions for Summernote v0.8.2
// Project: http://summernote.org/deep-dive/#initialization-options
// Definitions by: Wouter Staelens https://github.com/wstaelens/
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference path="../node_modules/@types/JQuery/index.d.ts"/>

interface SummernoteOptions {
    airMode?: boolean;
    callbacks?: any; // todo
    codemirror?: CodemirrorOptions;
    colors?: colorsDef;
    dialogsInBody?: boolean;
    dialogsFade?: boolean;
    direction?: string;
    disableDragAndDrop?: boolean;
    focus?: boolean;
    fontNames?: string[];
    fontNamesIgnoreCheck?: string[];
    height?: number;
    hint?: HintOptions;
    icons?: IconsOptions;
    insertTableMaxSize?: InsertTableMaxSizeOptions;
    keyMap?: KeyMapOptions;
    lang?: string;
    lineHeights?: string[];
    minHeight?: number;
    maxHeight?: number;
    maximumImageFileSize?: any;
    modules?: ModuleOptions;
    popover?: PopoverOptions;
    placeholder?: string;
    shortcuts?: boolean;
    styleTags?: styleTagsOptions[];
    styleWithSpan?: boolean;
    tabsize?: number;
    tableClassName?: string;
    textareaAutoSync?: boolean;
    toolbar?: toolbarDef;
    width?: number;
}

// callbacks ?
// https://www.typescriptlang.org/docs/handbook/functions.html#writing-the-function-type
//type OptionsDef = {
//    callbacks?: {
//        [event: string]: () => void
//    }
//};


type toolbarStyleGroupOptions = 'style' | 'bold' | 'italic' | 'underline' | 'clear';
type toolbarFontGroupOptions = 'strikethrough' | 'superscript' | 'subscript';
type toolbarFontsizeGroupOptions = 'fontsize';
type toolbarColorGroupOptions = 'color';
type toolbarParaGroupOptions = 'ul' | 'ol' | 'paragraph';
type toolbarHeightGroupOptions = 'height';
type toolbarTableGroupOptions = 'table';
type toolbarInsertGroupOptions = 'link' | 'picture' | 'hr';
type toolbarViewGroupOptions = 'fullscreen' | 'codeview';
type toolbarHelpGroupOptions = 'help';
//type toolbarDef = [string, string[]][];
type toolbarDef = [
    ['style', toolbarStyleGroupOptions[]]
    | ['font', toolbarFontGroupOptions[]]
    | ['fontsize', toolbarFontsizeGroupOptions[]]
    | ['color', toolbarColorGroupOptions[]]
    | ['para', toolbarParaGroupOptions[]]
    | ['height', toolbarHeightGroupOptions[]]
    | ['table', toolbarTableGroupOptions[]]
    | ['insert', toolbarInsertGroupOptions[]]
    | ['view', toolbarViewGroupOptions[]]
    | ['help', toolbarHelpGroupOptions[]]
];

type colorsDef = [string[]][];
type styleTagsOptions = 'p' | 'blockquote' | 'pre' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface InsertTableMaxSizeOptions {
    col: number;
    row: number;
}

interface IconsOptions {
    options?: any; // todo
}

interface KeyMapOptions {
    pc?: KeyMapPcOptions;
    mac?: KeyMapMacOptions;
}

interface KeyMapPcOptions {
    options?: any; // todo
}

interface KeyMapMacOptions {
    options?: any; // todo
}

interface HintOptions {
    words?: string[];
    mentions?: string[];
    match: RegExp;
    search: Function;
    template?: Function;
    content?: Function;
}

interface CodemirrorOptions {
    mode?: string;
    htmlNode?: boolean;
    lineNumbers?: boolean;
    theme?: string;
}

type popoverImageOptionsImagesize = 'imageSize100' | 'imageSize50' | 'imageSize25';
type popoverImageOptionsFloat = 'floatLeft' | 'floatRight' | 'floatNone';
type popoverImageOptionsRemove = 'removeMedia';
type popoverImageDef = [
    ['imagesize', popoverImageOptionsImagesize[]],
    ['float', popoverImageOptionsFloat[]],
    ['remove', popoverImageOptionsRemove[]]
];

type popoverLinkLinkOptions = 'linkDialogShow' | 'unlink';
type popoverLinkDef = [
    ['link', popoverLinkLinkOptions[]]
];

type popoverAirOptionsColor = 'color';
type popoverAirOptionsFont = 'bold' | 'underline' | 'clear';
type popoverAirOptionsPara = 'ul' | 'paragraph';
type popoverAirOptionsTable = 'table';
type popoverAirOptionsInsert = 'link' | 'picture';
type popoverAirDef = [
    ['color', popoverAirOptionsColor],
    ['font', popoverAirOptionsFont],
    ['para', popoverAirOptionsPara],
    ['table', popoverAirOptionsTable],
    ['insert', popoverAirOptionsInsert]
];

interface PopoverOptions {
    image?: popoverImageDef;
    link?: popoverLinkDef;
    air?: popoverAirDef;
}

interface ModuleOptions {
    options?: any; // todo
}

interface CreateLinkOptions {
    text: string;
    url: string;
    newWindow: boolean;
}

interface JQuery {
    summernote(): JQueryStatic;
    summernote(command: string): JQueryStatic;
    summernote(options?: SummernoteOptions): JQueryStatic;
    summernote(command: string, markupString: string): JQueryStatic
    summernote(command: string, value: number): JQueryStatic;
    summernote(command: string, node: Node): JQueryStatic;
    summernote(command: string, url: string, filename?: (string | Function)): JQueryStatic;

    summernote(command: 'destroy'): JQueryStatic;
    summernote(command: 'code', markupStr?: string): JQueryStatic;
    summernote(command: 'editor.pasteHTML' | 'pasteHTML', markup : string): JQueryStatic;

    // Basic API
    summernote(command: 'editor.createRange' | 'createRange'): JQueryStatic;
    summernote(command: 'editor.saveRange' | 'saveRange'): JQueryStatic;
    summernote(command: 'editor.restoreRange' | 'restoreRange'): JQueryStatic;
    summernote(command: 'editor.undo' | 'undo'): JQueryStatic;
    summernote(command: 'editor.redo' | 'redo'): JQueryStatic;
    summernote(command: 'editor.focus' | 'focus'): JQueryStatic;
    summernote(command: 'editor.isEmpty' | 'isEmpty'): boolean;
    summernote(command: 'reset'): JQueryStatic;
    summernote(command: 'disable'): JQueryStatic;
    summernote(command: 'enable'): JQueryStatic;
    // Font style API
    summernote(fontStyle: 'editor.bold' | 'bold'): JQueryStatic;
    summernote(fontStyle: 'editor.italic' | 'italic'): JQueryStatic;
    summernote(fontStyle: 'editor.underline' | 'underline'): JQueryStatic;
    summernote(fontStyle: 'editor.strikethrough' | 'strikethrough'): JQueryStatic;
    summernote(command: 'editor.superscript' | 'superscript'): JQueryStatic;
    summernote(command: 'editor.subscript' | 'subscript'): JQueryStatic;
    summernote(command: 'editor.removeFormat' | 'removeFormat'): JQueryStatic;
    summernote(command: 'backColor', color: string): JQueryStatic;
    summernote(command: 'foreColor', color: string): JQueryStatic;
    summernote(command: 'fontName', fontName: string): JQueryStatic;
    summernote(command: 'editor.fontSize' | 'fontSize', fontSize: number): JQueryStatic;
    // Paragraph API
    summernote(command: 'editor.justifyLeft' | 'justifyLeft'): JQueryStatic;
    summernote(command: 'editor.justifyRight' | 'justifyRight'): JQueryStatic;
    summernote(command: 'editor.justifyCenter' | 'justifyCenter'): JQueryStatic;
    summernote(command: 'editor.justifyFull' | 'justifyFull'): JQueryStatic;
    summernote(command: 'insertParagraph'): JQueryStatic;
    summernote(command: 'editor.insertOrderedList' | 'insertOrderedList'): JQueryStatic;
    summernote(command: 'editor.insertUnorderedList' | 'insertUnorderedList'): JQueryStatic;
    summernote(command: 'editor.indent' | 'indent'): JQueryStatic;
    summernote(command: 'editor.outdent' | 'outdent'): JQueryStatic;
    summernote(command: 'formatPara'): JQueryStatic;
    summernote(command: 'formatH1'): JQueryStatic;
    summernote(command: 'formatH2'): JQueryStatic;
    summernote(command: 'formatH3'): JQueryStatic;
    summernote(command: 'formatH4'): JQueryStatic;
    summernote(command: 'formatH5'): JQueryStatic;
    summernote(command: 'formatH6'): JQueryStatic;
    // Insertion API
    summernote(command: 'editor.insertImage' | 'insertImage', url: string, filename?: (string | Function)): JQueryStatic;
    summernote(command: 'editor.insertNode' | 'insertNode', node: Node): JQueryStatic;
    summernote(command: 'editor.insertText' | 'insertText', text: string): JQueryStatic;
    summernote(command: 'createLink', options: CreateLinkOptions): JQueryStatic;
    summernote(command: 'editor.unlink' | 'unlink'): JQueryStatic;
    // Callbacks
    // todo!

    // what about these?
    // editor.insertImagesOrCallback ??
    // editor.afterCommand ??
    // editor.resizeTo ??
    // editor.resize ??
    // editor.saveTarget ??
    // editor.isActivated ??
    // editor.formatBlock ??
    // editor.color ??
    // editor.lineHeight ??
    // editor.insertTable ??
    // editor.insertHorizontalRule ??
    // editor.floatMe ??
    // editor.removeMedia ??
    // editor.currentStyle ??
    // editor.getLinkInfo ??
    // editor.getSelectedText ??

    // todo: implement keyof in future release of TypeScript: http://stackoverflow.com/a/40843364/187650
}

/**
 * @description Accessing to summernote properties directly
 * @example
 * `
 * let ui = $.summernote.ui;
 * `
 */
interface JQueryStatic {
    summernote: any;
}

interface summernote {
    height: any;
    focus: any;
    lang: any;
    toolbar: any;
    airMode: any;
    dialogsInBody: any;
    callbacks: any;
    buttons: any;
}

declare module "summernote" {
}