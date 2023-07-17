import { Component } from "./jsx-runtime";
import * as State from 'Terraconnect-State';
import { NativeAnimationEvent, NativeClipboardEvent, NativeCompositionEvent, NativeDragEvent, NativeFocusEvent, NativeKeyboardEvent, NativeMouseEvent, NativePointerEvent, NativeTouchEvent, NativeTransitionEvent, NativeUIEvent, NativeWheelEvent} from './native';

type Booleanish = boolean | 'true' | 'false';

interface ClassAttributes<T> {}
type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = { [K in keyof (ClassAttributes<T> & E)]: State.State<(ClassAttributes<T> & E)[K]> | (ClassAttributes<T> & E)[K] };
// ({} as unknown as DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>).value

interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}
type HTMLWebViewElement = HTMLElement;

interface AbstractView {
  styleMedia: StyleMedia;
  document: Document;
}

interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}
interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}
interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
    clipboardData: DataTransfer;
}

interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
    data: string;
}

interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
    dataTransfer: DataTransfer;
}

interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
    pointerId: number;
    pressure: number;
    tangentialPressure: number;
    tiltX: number;
    tiltY: number;
    twist: number;
    width: number;
    height: number;
    pointerType: 'mouse' | 'pen' | 'touch';
    isPrimary: boolean;
}

interface FocusEvent<Target = Element, RelatedTarget = Element> extends SyntheticEvent<Target, NativeFocusEvent> {
    relatedTarget: (EventTarget & RelatedTarget) | null;
    target: EventTarget & Target;
}

interface FormEvent<T = Element> extends SyntheticEvent<T> {
}

interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
}

interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
}

interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {
    altKey: boolean;
    /** @deprecated */
    charCode: number;
    ctrlKey: boolean;
    code: string;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    /**
     * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
     */
    key: string;
    /** @deprecated */
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    /** @deprecated */
    which: number;
}

interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget | null;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
}

interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
}

interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
    detail: number;
    view: AbstractView;
}

interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
}

interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
    animationName: string;
    elapsedTime: number;
    pseudoElement: string;
}

interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
    elapsedTime: number;
    propertyName: string;
    pseudoElement: string;
}

export type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

export type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
export type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
export type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
export type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
export type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
export type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
export type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
export type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
export type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
export type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
export type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
export type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
export type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
export type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

interface BaseSyntheticEvent<E = object, C = any, T = any> {
  nativeEvent: E;
  currentTarget: C;
  target: T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  preventDefault(): void;
  isDefaultPrevented(): boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
  timeStamp: number;
  type: string;
}

interface DOMAttributes<T> {
  // children?: ReactNode | undefined;
  // dangerouslySetInnerHTML?: {
  //     __html: string;
  // } | undefined;

  // // Clipboard Events
  // onCopy?: ClipboardEventHandler<T> | undefined;
  // onCopyCapture?: ClipboardEventHandler<T> | undefined;
  // onCut?: ClipboardEventHandler<T> | undefined;
  // onCutCapture?: ClipboardEventHandler<T> | undefined;
  // onPaste?: ClipboardEventHandler<T> | undefined;
  // onPasteCapture?: ClipboardEventHandler<T> | undefined;

  // // Composition Events
  // onCompositionEnd?: CompositionEventHandler<T> | undefined;
  // onCompositionEndCapture?: CompositionEventHandler<T> | undefined;
  // onCompositionStart?: CompositionEventHandler<T> | undefined;
  // onCompositionStartCapture?: CompositionEventHandler<T> | undefined;
  // onCompositionUpdate?: CompositionEventHandler<T> | undefined;
  // onCompositionUpdateCapture?: CompositionEventHandler<T> | undefined;

  // // Focus Events
  // onFocus?: FocusEventHandler<T> | undefined;
  // onFocusCapture?: FocusEventHandler<T> | undefined;
  // onBlur?: FocusEventHandler<T> | undefined;
  // onBlurCapture?: FocusEventHandler<T> | undefined;

  // // Form Events
  // onChange?: FormEventHandler<T> | undefined;
  // onChangeCapture?: FormEventHandler<T> | undefined;
  // onBeforeInput?: FormEventHandler<T> | undefined;
  // onBeforeInputCapture?: FormEventHandler<T> | undefined;
  // onInput?: FormEventHandler<T> | undefined;
  // onInputCapture?: FormEventHandler<T> | undefined;
  // onReset?: FormEventHandler<T> | undefined;
  // onResetCapture?: FormEventHandler<T> | undefined;
  // onSubmit?: FormEventHandler<T> | undefined;
  // onSubmitCapture?: FormEventHandler<T> | undefined;
  // onInvalid?: FormEventHandler<T> | undefined;
  // onInvalidCapture?: FormEventHandler<T> | undefined;

  // // Image Events
  // onLoad?: ReactEventHandler<T> | undefined;
  // onLoadCapture?: ReactEventHandler<T> | undefined;
  // onError?: ReactEventHandler<T> | undefined; // also a Media Event
  // onErrorCapture?: ReactEventHandler<T> | undefined; // also a Media Event

  // // Keyboard Events
  // onKeyDown?: KeyboardEventHandler<T> | undefined;
  // onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
  // /** @deprecated */
  // onKeyPress?: KeyboardEventHandler<T> | undefined;
  // /** @deprecated */
  // onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
  // onKeyUp?: KeyboardEventHandler<T> | undefined;
  // onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

  // // Media Events
  // onAbort?: ReactEventHandler<T> | undefined;
  // onAbortCapture?: ReactEventHandler<T> | undefined;
  // onCanPlay?: ReactEventHandler<T> | undefined;
  // onCanPlayCapture?: ReactEventHandler<T> | undefined;
  // onCanPlayThrough?: ReactEventHandler<T> | undefined;
  // onCanPlayThroughCapture?: ReactEventHandler<T> | undefined;
  // onDurationChange?: ReactEventHandler<T> | undefined;
  // onDurationChangeCapture?: ReactEventHandler<T> | undefined;
  // onEmptied?: ReactEventHandler<T> | undefined;
  // onEmptiedCapture?: ReactEventHandler<T> | undefined;
  // onEncrypted?: ReactEventHandler<T> | undefined;
  // onEncryptedCapture?: ReactEventHandler<T> | undefined;
  // onEnded?: ReactEventHandler<T> | undefined;
  // onEndedCapture?: ReactEventHandler<T> | undefined;
  // onLoadedData?: ReactEventHandler<T> | undefined;
  // onLoadedDataCapture?: ReactEventHandler<T> | undefined;
  // onLoadedMetadata?: ReactEventHandler<T> | undefined;
  // onLoadedMetadataCapture?: ReactEventHandler<T> | undefined;
  // onLoadStart?: ReactEventHandler<T> | undefined;
  // onLoadStartCapture?: ReactEventHandler<T> | undefined;
  // onPause?: ReactEventHandler<T> | undefined;
  // onPauseCapture?: ReactEventHandler<T> | undefined;
  // onPlay?: ReactEventHandler<T> | undefined;
  // onPlayCapture?: ReactEventHandler<T> | undefined;
  // onPlaying?: ReactEventHandler<T> | undefined;
  // onPlayingCapture?: ReactEventHandler<T> | undefined;
  // onProgress?: ReactEventHandler<T> | undefined;
  // onProgressCapture?: ReactEventHandler<T> | undefined;
  // onRateChange?: ReactEventHandler<T> | undefined;
  // onRateChangeCapture?: ReactEventHandler<T> | undefined;
  // onSeeked?: ReactEventHandler<T> | undefined;
  // onSeekedCapture?: ReactEventHandler<T> | undefined;
  // onSeeking?: ReactEventHandler<T> | undefined;
  // onSeekingCapture?: ReactEventHandler<T> | undefined;
  // onStalled?: ReactEventHandler<T> | undefined;
  // onStalledCapture?: ReactEventHandler<T> | undefined;
  // onSuspend?: ReactEventHandler<T> | undefined;
  // onSuspendCapture?: ReactEventHandler<T> | undefined;
  // onTimeUpdate?: ReactEventHandler<T> | undefined;
  // onTimeUpdateCapture?: ReactEventHandler<T> | undefined;
  // onVolumeChange?: ReactEventHandler<T> | undefined;
  // onVolumeChangeCapture?: ReactEventHandler<T> | undefined;
  // onWaiting?: ReactEventHandler<T> | undefined;
  // onWaitingCapture?: ReactEventHandler<T> | undefined;

  // UIEvents
  onMount?: EventHandler<SyntheticEvent<T, Event>> | undefined;
  onUnmount?: EventHandler<SyntheticEvent<T, Event>> | undefined;

  // MouseEvents
  onAuxClick?: MouseEventHandler<T> | undefined;
  onAuxClickCapture?: MouseEventHandler<T> | undefined;
  onClick?: MouseEventHandler<T> | undefined;
  onClickCapture?: MouseEventHandler<T> | undefined;
  onContextMenu?: MouseEventHandler<T> | undefined;
  onContextMenuCapture?: MouseEventHandler<T> | undefined;
  onDoubleClick?: MouseEventHandler<T> | undefined;
  onDoubleClickCapture?: MouseEventHandler<T> | undefined;
  onDrag?: DragEventHandler<T> | undefined;
  onDragCapture?: DragEventHandler<T> | undefined;
  onDragEnd?: DragEventHandler<T> | undefined;
  onDragEndCapture?: DragEventHandler<T> | undefined;
  onDragEnter?: DragEventHandler<T> | undefined;
  onDragEnterCapture?: DragEventHandler<T> | undefined;
  onDragExit?: DragEventHandler<T> | undefined;
  onDragExitCapture?: DragEventHandler<T> | undefined;
  onDragLeave?: DragEventHandler<T> | undefined;
  onDragLeaveCapture?: DragEventHandler<T> | undefined;
  onDragOver?: DragEventHandler<T> | undefined;
  onDragOverCapture?: DragEventHandler<T> | undefined;
  onDragStart?: DragEventHandler<T> | undefined;
  onDragStartCapture?: DragEventHandler<T> | undefined;
  onDrop?: DragEventHandler<T> | undefined;
  onDropCapture?: DragEventHandler<T> | undefined;
  onMouseDown?: MouseEventHandler<T> | undefined;
  onMouseDownCapture?: MouseEventHandler<T> | undefined;
  onMouseEnter?: MouseEventHandler<T> | undefined;
  onMouseLeave?: MouseEventHandler<T> | undefined;
  onMouseMove?: MouseEventHandler<T> | undefined;
  onMouseMoveCapture?: MouseEventHandler<T> | undefined;
  onMouseOut?: MouseEventHandler<T> | undefined;
  onMouseOutCapture?: MouseEventHandler<T> | undefined;
  onMouseOver?: MouseEventHandler<T> | undefined;
  onMouseOverCapture?: MouseEventHandler<T> | undefined;
  onMouseUp?: MouseEventHandler<T> | undefined;
  onMouseUpCapture?: MouseEventHandler<T> | undefined;

  // // Selection Events
  // onSelect?: ReactEventHandler<T> | undefined;
  // onSelectCapture?: ReactEventHandler<T> | undefined;

  // // Touch Events
  // onTouchCancel?: TouchEventHandler<T> | undefined;
  // onTouchCancelCapture?: TouchEventHandler<T> | undefined;
  // onTouchEnd?: TouchEventHandler<T> | undefined;
  // onTouchEndCapture?: TouchEventHandler<T> | undefined;
  // onTouchMove?: TouchEventHandler<T> | undefined;
  // onTouchMoveCapture?: TouchEventHandler<T> | undefined;
  // onTouchStart?: TouchEventHandler<T> | undefined;
  // onTouchStartCapture?: TouchEventHandler<T> | undefined;

  // // Pointer Events
  // onPointerDown?: PointerEventHandler<T> | undefined;
  // onPointerDownCapture?: PointerEventHandler<T> | undefined;
  // onPointerMove?: PointerEventHandler<T> | undefined;
  // onPointerMoveCapture?: PointerEventHandler<T> | undefined;
  // onPointerUp?: PointerEventHandler<T> | undefined;
  // onPointerUpCapture?: PointerEventHandler<T> | undefined;
  // onPointerCancel?: PointerEventHandler<T> | undefined;
  // onPointerCancelCapture?: PointerEventHandler<T> | undefined;
  // onPointerEnter?: PointerEventHandler<T> | undefined;
  // onPointerEnterCapture?: PointerEventHandler<T> | undefined;
  // onPointerLeave?: PointerEventHandler<T> | undefined;
  // onPointerLeaveCapture?: PointerEventHandler<T> | undefined;
  // onPointerOver?: PointerEventHandler<T> | undefined;
  // onPointerOverCapture?: PointerEventHandler<T> | undefined;
  // onPointerOut?: PointerEventHandler<T> | undefined;
  // onPointerOutCapture?: PointerEventHandler<T> | undefined;
  // onGotPointerCapture?: PointerEventHandler<T> | undefined;
  // onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined;
  // onLostPointerCapture?: PointerEventHandler<T> | undefined;
  // onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined;

  // // UI Events
  // onScroll?: UIEventHandler<T> | undefined;
  // onScrollCapture?: UIEventHandler<T> | undefined;

  // // Wheel Events
  // onWheel?: WheelEventHandler<T> | undefined;
  // onWheelCapture?: WheelEventHandler<T> | undefined;

  // // Animation Events
  // onAnimationStart?: AnimationEventHandler<T> | undefined;
  // onAnimationStartCapture?: AnimationEventHandler<T> | undefined;
  // onAnimationEnd?: AnimationEventHandler<T> | undefined;
  // onAnimationEndCapture?: AnimationEventHandler<T> | undefined;
  // onAnimationIteration?: AnimationEventHandler<T> | undefined;
  // onAnimationIterationCapture?: AnimationEventHandler<T> | undefined;

  // // Transition Events
  // onTransitionEnd?: TransitionEventHandler<T> | undefined;
  // onTransitionEndCapture?: TransitionEventHandler<T> | undefined;
}

export interface CSSProperties /*extends CSS.Properties<string | number>*/ {
//   /**
//    * The index signature was removed to enable closed typing for style
//    * using CSSType. You're able to use type assertion or module augmentation
//    * to add properties or an index signature of your own.
//    *
//    * For examples and more information, visit:
//    * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
//    */
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string | undefined;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Booleanish | undefined;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | undefined;
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: Booleanish | undefined;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: boolean | 'false' | 'mixed' | 'true' | undefined;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: number | undefined;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: number | undefined;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: number | undefined;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string | undefined;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time' | undefined;
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: string | undefined;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: string | undefined;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: Booleanish | undefined;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | undefined;
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: string | undefined;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: Booleanish | undefined;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string | undefined;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: Booleanish | undefined;
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: Booleanish | undefined;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling' | undefined;
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string | undefined;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: string | undefined;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: string | undefined;
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: number | undefined;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: Booleanish | undefined;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: Booleanish | undefined;
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: Booleanish | undefined;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: string | undefined;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: string | undefined;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: number | undefined;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: boolean | 'false' | 'mixed' | 'true' | undefined;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: Booleanish | undefined;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals' | undefined;
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: Booleanish | undefined;
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string | undefined;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: number | undefined;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: number | undefined;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: number | undefined;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: Booleanish | undefined;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: number | undefined;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: number | undefined;
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: number | undefined;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: number | undefined;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string | undefined;
}

// All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
type AriaRole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem'
  | (string & {});

interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  // React-specific Attributes
  defaultChecked?: boolean | undefined;
  defaultValue?: string | number | ReadonlyArray<string> | undefined;
  suppressContentEditableWarning?: boolean | undefined;
  suppressHydrationWarning?: boolean | undefined;

  // Standard HTML Attributes
  accessKey?: string | undefined;
  className?: string | undefined;
  contentEditable?: Booleanish | "inherit" | undefined;
  contextMenu?: string | undefined;
  dir?: string | undefined;
  draggable?: Booleanish | undefined;
  hidden?: boolean | undefined;
  id?: string | undefined;
  lang?: string | undefined;
  placeholder?: string | undefined;
  slot?: string | undefined;
  spellCheck?: Booleanish | undefined;
  style?: CSSProperties | undefined;
  tabIndex?: number | undefined;
  title?: string | undefined;
  translate?: 'yes' | 'no' | undefined;

  // Unknown
  radioGroup?: string | undefined; // <command>, <menuitem>

  // WAI-ARIA
  role?: AriaRole | undefined;

  // RDFa Attributes
  about?: string | undefined;
  datatype?: string | undefined;
  inlist?: any;
  prefix?: string | undefined;
  property?: string | undefined;
  resource?: string | undefined;
  typeof?: string | undefined;
  vocab?: string | undefined;

  // Non-standard Attributes
  autoCapitalize?: string | undefined;
  autoCorrect?: string | undefined;
  autoSave?: string | undefined;
  color?: string | undefined;
  itemProp?: string | undefined;
  itemScope?: boolean | undefined;
  itemType?: string | undefined;
  itemID?: string | undefined;
  itemRef?: string | undefined;
  results?: number | undefined;
  security?: string | undefined;
  unselectable?: 'on' | 'off' | undefined;

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string | undefined;
}

interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
  // Standard HTML Attributes
  accept?: string | undefined;
  acceptCharset?: string | undefined;
  action?: string | undefined;
  allowFullScreen?: boolean | undefined;
  allowTransparency?: boolean | undefined;
  alt?: string | undefined;
  as?: string | undefined;
  async?: boolean | undefined;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  autoPlay?: boolean | undefined;
  capture?: boolean | 'user' | 'environment' | undefined;
  cellPadding?: number | string | undefined;
  cellSpacing?: number | string | undefined;
  charSet?: string | undefined;
  challenge?: string | undefined;
  checked?: boolean | undefined;
  cite?: string | undefined;
  classID?: string | undefined;
  cols?: number | undefined;
  colSpan?: number | undefined;
  content?: string | undefined;
  controls?: boolean | undefined;
  coords?: string | undefined;
  crossOrigin?: string | undefined;
  data?: string | undefined;
  dateTime?: string | undefined;
  default?: boolean | undefined;
  defer?: boolean | undefined;
  disabled?: boolean | undefined;
  download?: any;
  encType?: string | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  frameBorder?: number | string | undefined;
  headers?: string | undefined;
  height?: number | string | undefined;
  high?: number | undefined;
  href?: string | undefined;
  hrefLang?: string | undefined;
  htmlFor?: string | undefined;
  httpEquiv?: string | undefined;
  integrity?: string | undefined;
  keyParams?: string | undefined;
  keyType?: string | undefined;
  kind?: string | undefined;
  label?: string | undefined;
  list?: string | undefined;
  loop?: boolean | undefined;
  low?: number | undefined;
  manifest?: string | undefined;
  marginHeight?: number | undefined;
  marginWidth?: number | undefined;
  max?: number | string | undefined;
  maxLength?: number | undefined;
  media?: string | undefined;
  mediaGroup?: string | undefined;
  method?: string | undefined;
  min?: number | string | undefined;
  minLength?: number | undefined;
  multiple?: boolean | undefined;
  muted?: boolean | undefined;
  name?: string | undefined;
  nonce?: string | undefined;
  noValidate?: boolean | undefined;
  open?: boolean | undefined;
  optimum?: number | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  playsInline?: boolean | undefined;
  poster?: string | undefined;
  preload?: string | undefined;
  readOnly?: boolean | undefined;
  rel?: string | undefined;
  required?: boolean | undefined;
  reversed?: boolean | undefined;
  rows?: number | undefined;
  rowSpan?: number | undefined;
  sandbox?: string | undefined;
  scope?: string | undefined;
  scoped?: boolean | undefined;
  scrolling?: string | undefined;
  seamless?: boolean | undefined;
  selected?: boolean | undefined;
  shape?: string | undefined;
  size?: number | undefined;
  sizes?: string | undefined;
  span?: number | undefined;
  src?: string | undefined;
  srcDoc?: string | undefined;
  srcLang?: string | undefined;
  srcSet?: string | undefined;
  start?: number | undefined;
  step?: number | string | undefined;
  summary?: string | undefined;
  target?: string | undefined;
  type?: string | undefined;
  useMap?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  width?: number | string | undefined;
  wmode?: string | undefined;
  wrap?: string | undefined;
}

type HTMLAttributeReferrerPolicy =
  | ''
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url';

type HTMLAttributeAnchorTarget =
  | '_self'
  | '_blank'
  | '_parent'
  | '_top'
  | (string & {});

interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
  download?: any;
  href?: string | undefined;
  hrefLang?: string | undefined;
  media?: string | undefined;
  ping?: string | undefined;
  rel?: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  type?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
}

interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
  alt?: string | undefined;
  coords?: string | undefined;
  download?: any;
  href?: string | undefined;
  hrefLang?: string | undefined;
  media?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  rel?: string | undefined;
  shape?: string | undefined;
  target?: string | undefined;
}

interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
  href?: string | undefined;
  target?: string | undefined;
}

interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
  cite?: string | undefined;
}

interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  name?: string | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
  height?: number | string | undefined;
  width?: number | string | undefined;
}

interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
  span?: number | undefined;
  width?: number | string | undefined;
}

interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
  span?: number | undefined;
}

interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
  value?: string | ReadonlyArray<string> | number | undefined;
}

interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
  open?: boolean | undefined;
  // onToggle?: ReactEventHandler<T> | undefined;
}

interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
  cite?: string | undefined;
  dateTime?: string | undefined;
}

interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
  // onCancel?: ReactEventHandler<T> |  undefined;
  // onClose?: ReactEventHandler<T> |  undefined;
  open?: boolean | undefined;
}

interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
  height?: number | string | undefined;
  src?: string | undefined;
  type?: string | undefined;
  width?: number | string | undefined;
}

interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
  disabled?: boolean | undefined;
  form?: string | undefined;
  name?: string | undefined;
}

interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
  acceptCharset?: string | undefined;
  action?: string | undefined;
  autoComplete?: string | undefined;
  encType?: string | undefined;
  method?: string | undefined;
  name?: string | undefined;
  noValidate?: boolean | undefined;
  target?: string | undefined;
  rel?: string | undefined;
}

interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
  manifest?: string | undefined;
}

interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
  allow?: string | undefined;
  allowFullScreen?: boolean | undefined;
  allowTransparency?: boolean | undefined;
  /** @deprecated */
  frameBorder?: number | string | undefined;
  height?: number | string | undefined;
  loading?: "eager" | "lazy" | undefined;
  /** @deprecated */
  marginHeight?: number | undefined;
  /** @deprecated */
  marginWidth?: number | undefined;
  name?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  sandbox?: string | undefined;
  /** @deprecated */
  scrolling?: string | undefined;
  seamless?: boolean | undefined;
  src?: string | undefined;
  srcDoc?: string | undefined;
  width?: number | string | undefined;
}

interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
  alt?: string | undefined;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
  decoding?: "async" | "auto" | "sync" | undefined;
  height?: number | string | undefined;
  loading?: "eager" | "lazy" | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  sizes?: string | undefined;
  src?: string | undefined;
  srcSet?: string | undefined;
  useMap?: string | undefined;
  width?: number | string | undefined;
}

interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
  cite?: string | undefined;
  dateTime?: string | undefined;
}

type HTMLInputTypeAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | (string & {});

interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
  accept?: string | undefined;
  alt?: string | undefined;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  capture?: boolean | 'user' | 'environment' | undefined;
  checked?: boolean | undefined;
  crossOrigin?: string | undefined;
  disabled?: boolean | undefined;
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  height?: number | string | undefined;
  list?: string | undefined;
  max?: number | string | undefined;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  minLength?: number | undefined;
  multiple?: boolean | undefined;
  name?: string | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  src?: string | undefined;
  step?: number | string | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  width?: number | string | undefined;

  onChange?: ChangeEventHandler<T> | undefined;
}

interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
  autoFocus?: boolean | undefined;
  challenge?: string | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  keyType?: string | undefined;
  keyParams?: string | undefined;
  name?: string | undefined;
}

interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
  form?: string | undefined;
  htmlFor?: string | undefined;
}

interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
  value?: string | ReadonlyArray<string> | number | undefined;
}

interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
  as?: string | undefined;
  crossOrigin?: string | undefined;
  href?: string | undefined;
  hrefLang?: string | undefined;
  integrity?: string | undefined;
  media?: string | undefined;
  imageSrcSet?: string | undefined;
  imageSizes?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  rel?: string | undefined;
  sizes?: string | undefined;
  type?: string | undefined;
  charSet?: string | undefined;
}

interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
  name?: string | undefined;
}

interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
  type?: string | undefined;
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
  autoPlay?: boolean | undefined;
  controls?: boolean | undefined;
  controlsList?: string | undefined;
  crossOrigin?: string | undefined;
  loop?: boolean | undefined;
  mediaGroup?: string | undefined;
  muted?: boolean | undefined;
  playsInline?: boolean | undefined;
  preload?: string | undefined;
  src?: string | undefined;
}

interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
  charSet?: string | undefined;
  content?: string | undefined;
  httpEquiv?: string | undefined;
  name?: string | undefined;
  media?: string | undefined;
}

interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
  form?: string | undefined;
  high?: number | undefined;
  low?: number | undefined;
  max?: number | string | undefined;
  min?: number | string | undefined;
  optimum?: number | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
  cite?: string | undefined;
}

interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
  classID?: string | undefined;
  data?: string | undefined;
  form?: string | undefined;
  height?: number | string | undefined;
  name?: string | undefined;
  type?: string | undefined;
  useMap?: string | undefined;
  width?: number | string | undefined;
  wmode?: string | undefined;
}

interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
  reversed?: boolean | undefined;
  start?: number | undefined;
  type?: '1' | 'a' | 'A' | 'i' | 'I' | undefined;
}

interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
  disabled?: boolean | undefined;
  label?: string | undefined;
}

interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
  disabled?: boolean | undefined;
  label?: string | undefined;
  selected?: boolean | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
  form?: string | undefined;
  htmlFor?: string | undefined;
  name?: string | undefined;
}

interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
  name?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
  max?: number | string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
  name?: string | undefined;
}

interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
  async?: boolean | undefined;
  /** @deprecated */
  charSet?: string | undefined;
  crossOrigin?: string | undefined;
  defer?: boolean | undefined;
  integrity?: string | undefined;
  noModule?: boolean | undefined;
  nonce?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  src?: string | undefined;
  type?: string | undefined;
}

interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  multiple?: boolean | undefined;
  name?: string | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  onChange?: ChangeEventHandler<T> | undefined;
}

interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
  height?: number | string | undefined;
  media?: string | undefined;
  sizes?: string | undefined;
  src?: string | undefined;
  srcSet?: string | undefined;
  type?: string | undefined;
  width?: number | string | undefined;
}

interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
  media?: string | undefined;
  nonce?: string | undefined;
  scoped?: boolean | undefined;
  type?: string | undefined;
}

interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
  align?: "left" | "center" | "right" | undefined;
  bgcolor?: string | undefined;
  border?: number | undefined;
  cellPadding?: number | string | undefined;
  cellSpacing?: number | string | undefined;
  frame?: boolean | undefined;
  rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
  summary?: string | undefined;
  width?: number | string | undefined;
}

interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  cols?: number | undefined;
  dirName?: string | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  rows?: number | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  wrap?: string | undefined;

  onChange?: ChangeEventHandler<T> | undefined;
}

interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colSpan?: number | undefined;
  headers?: string | undefined;
  rowSpan?: number | undefined;
  scope?: string | undefined;
  abbr?: string | undefined;
  height?: number | string | undefined;
  width?: number | string | undefined;
  valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
}

interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colSpan?: number | undefined;
  headers?: string | undefined;
  rowSpan?: number | undefined;
  scope?: string | undefined;
  abbr?: string | undefined;
}

interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
  dateTime?: string | undefined;
}

interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
  default?: boolean | undefined;
  kind?: string | undefined;
  label?: string | undefined;
  src?: string | undefined;
  srcLang?: string | undefined;
}

interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
  height?: number | string | undefined;
  playsInline?: boolean | undefined;
  poster?: string | undefined;
  width?: number | string | undefined;
  disablePictureInPicture?: boolean | undefined;
  disableRemotePlayback?: boolean | undefined;
}

interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  className?: string | undefined;
  color?: string | undefined;
  height?: number | string | undefined;
  id?: string | undefined;
  lang?: string | undefined;
  max?: number | string | undefined;
  media?: string | undefined;
  method?: string | undefined;
  min?: number | string | undefined;
  name?: string | undefined;
  style?: CSSProperties | undefined;
  target?: string | undefined;
  type?: string | undefined;
  width?: number | string | undefined;
  role?: AriaRole | undefined;
  tabIndex?: number | undefined;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;

  // SVG Specific attributes
  accentHeight?: number | string | undefined;
  accumulate?: "none" | "sum" | undefined;
  additive?: "replace" | "sum" | undefined;
  alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
  "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | undefined;
  allowReorder?: "no" | "yes" | undefined;
  alphabetic?: number | string | undefined;
  amplitude?: number | string | undefined;
  arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
  ascent?: number | string | undefined;
  attributeName?: string | undefined;
  attributeType?: string | undefined;
  autoReverse?: Booleanish | undefined;
  azimuth?: number | string | undefined;
  baseFrequency?: number | string | undefined;
  baselineShift?: number | string | undefined;
  baseProfile?: number | string | undefined;
  bbox?: number | string | undefined;
  begin?: number | string | undefined;
  bias?: number | string | undefined;
  by?: number | string | undefined;
  calcMode?: number | string | undefined;
  capHeight?: number | string | undefined;
  clip?: number | string | undefined;
  clipPath?: string | undefined;
  clipPathUnits?: number | string | undefined;
  clipRule?: number | string | undefined;
  colorInterpolation?: number | string | undefined;
  colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
  colorProfile?: number | string | undefined;
  colorRendering?: number | string | undefined;
  contentScriptType?: number | string | undefined;
  contentStyleType?: number | string | undefined;
  cursor?: number | string | undefined;
  cx?: number | string | undefined;
  cy?: number | string | undefined;
  d?: string | undefined;
  decelerate?: number | string | undefined;
  descent?: number | string | undefined;
  diffuseConstant?: number | string | undefined;
  direction?: number | string | undefined;
  display?: number | string | undefined;
  divisor?: number | string | undefined;
  dominantBaseline?: number | string | undefined;
  dur?: number | string | undefined;
  dx?: number | string | undefined;
  dy?: number | string | undefined;
  edgeMode?: number | string | undefined;
  elevation?: number | string | undefined;
  enableBackground?: number | string | undefined;
  end?: number | string | undefined;
  exponent?: number | string | undefined;
  externalResourcesRequired?: Booleanish | undefined;
  fill?: string | undefined;
  fillOpacity?: number | string | undefined;
  fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
  filter?: string | undefined;
  filterRes?: number | string | undefined;
  filterUnits?: number | string | undefined;
  floodColor?: number | string | undefined;
  floodOpacity?: number | string | undefined;
  focusable?: Booleanish | "auto" | undefined;
  fontFamily?: string | undefined;
  fontSize?: number | string | undefined;
  fontSizeAdjust?: number | string | undefined;
  fontStretch?: number | string | undefined;
  fontStyle?: number | string | undefined;
  fontVariant?: number | string | undefined;
  fontWeight?: number | string | undefined;
  format?: number | string | undefined;
  fr?: number | string | undefined;
  from?: number | string | undefined;
  fx?: number | string | undefined;
  fy?: number | string | undefined;
  g1?: number | string | undefined;
  g2?: number | string | undefined;
  glyphName?: number | string | undefined;
  glyphOrientationHorizontal?: number | string | undefined;
  glyphOrientationVertical?: number | string | undefined;
  glyphRef?: number | string | undefined;
  gradientTransform?: string | undefined;
  gradientUnits?: string | undefined;
  hanging?: number | string | undefined;
  horizAdvX?: number | string | undefined;
  horizOriginX?: number | string | undefined;
  href?: string | undefined;
  ideographic?: number | string | undefined;
  imageRendering?: number | string | undefined;
  in2?: number | string | undefined;
  in?: string | undefined;
  intercept?: number | string | undefined;
  k1?: number | string | undefined;
  k2?: number | string | undefined;
  k3?: number | string | undefined;
  k4?: number | string | undefined;
  k?: number | string | undefined;
  kernelMatrix?: number | string | undefined;
  kernelUnitLength?: number | string | undefined;
  kerning?: number | string | undefined;
  keyPoints?: number | string | undefined;
  keySplines?: number | string | undefined;
  keyTimes?: number | string | undefined;
  lengthAdjust?: number | string | undefined;
  letterSpacing?: number | string | undefined;
  lightingColor?: number | string | undefined;
  limitingConeAngle?: number | string | undefined;
  local?: number | string | undefined;
  markerEnd?: string | undefined;
  markerHeight?: number | string | undefined;
  markerMid?: string | undefined;
  markerStart?: string | undefined;
  markerUnits?: number | string | undefined;
  markerWidth?: number | string | undefined;
  mask?: string | undefined;
  maskContentUnits?: number | string | undefined;
  maskUnits?: number | string | undefined;
  mathematical?: number | string | undefined;
  mode?: number | string | undefined;
  numOctaves?: number | string | undefined;
  offset?: number | string | undefined;
  opacity?: number | string | undefined;
  operator?: number | string | undefined;
  order?: number | string | undefined;
  orient?: number | string | undefined;
  orientation?: number | string | undefined;
  origin?: number | string | undefined;
  overflow?: number | string | undefined;
  overlinePosition?: number | string | undefined;
  overlineThickness?: number | string | undefined;
  paintOrder?: number | string | undefined;
  panose1?: number | string | undefined;
  path?: string | undefined;
  pathLength?: number | string | undefined;
  patternContentUnits?: string | undefined;
  patternTransform?: number | string | undefined;
  patternUnits?: string | undefined;
  pointerEvents?: number | string | undefined;
  points?: string | undefined;
  pointsAtX?: number | string | undefined;
  pointsAtY?: number | string | undefined;
  pointsAtZ?: number | string | undefined;
  preserveAlpha?: Booleanish | undefined;
  preserveAspectRatio?: string | undefined;
  primitiveUnits?: number | string | undefined;
  r?: number | string | undefined;
  radius?: number | string | undefined;
  refX?: number | string | undefined;
  refY?: number | string | undefined;
  renderingIntent?: number | string | undefined;
  repeatCount?: number | string | undefined;
  repeatDur?: number | string | undefined;
  requiredExtensions?: number | string | undefined;
  requiredFeatures?: number | string | undefined;
  restart?: number | string | undefined;
  result?: string | undefined;
  rotate?: number | string | undefined;
  rx?: number | string | undefined;
  ry?: number | string | undefined;
  scale?: number | string | undefined;
  seed?: number | string | undefined;
  shapeRendering?: number | string | undefined;
  slope?: number | string | undefined;
  spacing?: number | string | undefined;
  specularConstant?: number | string | undefined;
  specularExponent?: number | string | undefined;
  speed?: number | string | undefined;
  spreadMethod?: string | undefined;
  startOffset?: number | string | undefined;
  stdDeviation?: number | string | undefined;
  stemh?: number | string | undefined;
  stemv?: number | string | undefined;
  stitchTiles?: number | string | undefined;
  stopColor?: string | undefined;
  stopOpacity?: number | string | undefined;
  strikethroughPosition?: number | string | undefined;
  strikethroughThickness?: number | string | undefined;
  string?: number | string | undefined;
  stroke?: string | undefined;
  strokeDasharray?: string | number | undefined;
  strokeDashoffset?: string | number | undefined;
  strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
  strokeMiterlimit?: number | string | undefined;
  strokeOpacity?: number | string | undefined;
  strokeWidth?: number | string | undefined;
  surfaceScale?: number | string | undefined;
  systemLanguage?: number | string | undefined;
  tableValues?: number | string | undefined;
  targetX?: number | string | undefined;
  targetY?: number | string | undefined;
  textAnchor?: string | undefined;
  textDecoration?: number | string | undefined;
  textLength?: number | string | undefined;
  textRendering?: number | string | undefined;
  to?: number | string | undefined;
  transform?: string | undefined;
  u1?: number | string | undefined;
  u2?: number | string | undefined;
  underlinePosition?: number | string | undefined;
  underlineThickness?: number | string | undefined;
  unicode?: number | string | undefined;
  unicodeBidi?: number | string | undefined;
  unicodeRange?: number | string | undefined;
  unitsPerEm?: number | string | undefined;
  vAlphabetic?: number | string | undefined;
  values?: string | undefined;
  vectorEffect?: number | string | undefined;
  version?: string | undefined;
  vertAdvY?: number | string | undefined;
  vertOriginX?: number | string | undefined;
  vertOriginY?: number | string | undefined;
  vHanging?: number | string | undefined;
  vIdeographic?: number | string | undefined;
  viewBox?: string | undefined;
  viewTarget?: number | string | undefined;
  visibility?: number | string | undefined;
  vMathematical?: number | string | undefined;
  widths?: number | string | undefined;
  wordSpacing?: number | string | undefined;
  writingMode?: number | string | undefined;
  x1?: number | string | undefined;
  x2?: number | string | undefined;
  x?: number | string | undefined;
  xChannelSelector?: string | undefined;
  xHeight?: number | string | undefined;
  xlinkActuate?: string | undefined;
  xlinkArcrole?: string | undefined;
  xlinkHref?: string | undefined;
  xlinkRole?: string | undefined;
  xlinkShow?: string | undefined;
  xlinkTitle?: string | undefined;
  xlinkType?: string | undefined;
  xmlBase?: string | undefined;
  xmlLang?: string | undefined;
  xmlns?: string | undefined;
  xmlnsXlink?: string | undefined;
  xmlSpace?: string | undefined;
  y1?: number | string | undefined;
  y2?: number | string | undefined;
  y?: number | string | undefined;
  yChannelSelector?: string | undefined;
  z?: number | string | undefined;
  zoomAndPan?: string | undefined;
}

interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
  allowFullScreen?: boolean | undefined;
  allowpopups?: boolean | undefined;
  autoFocus?: boolean | undefined;
  autosize?: boolean | undefined;
  blinkfeatures?: string | undefined;
  disableblinkfeatures?: string | undefined;
  disableguestresize?: boolean | undefined;
  disablewebsecurity?: boolean | undefined;
  guestinstance?: string | undefined;
  httpreferrer?: string | undefined;
  nodeintegration?: boolean | undefined;
  partition?: string | undefined;
  plugins?: boolean | undefined;
  preload?: string | undefined;
  src?: string | undefined;
  useragent?: string | undefined;
  webpreferences?: string | undefined;
}

interface IntrinsicElementsHTML {
  a: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
  abbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  address: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  area: DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
  article: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  aside: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  audio: DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
  b: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  base: DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
  bdi: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  bdo: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  big: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  blockquote: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
  body: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
  br: DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
  button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  canvas: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
  caption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  cite: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  code: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  col: DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
  colgroup: DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
  data: DetailedHTMLProps<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
  datalist: DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
  dd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  del: DetailedHTMLProps<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
  details: DetailedHTMLProps<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
  dfn: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  dialog: DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
  div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  dl: DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
  dt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  em: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  embed: DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
  fieldset: DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
  figcaption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  figure: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  footer: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  form: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
  h1: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h2: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h3: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h4: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h5: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h6: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  head: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
  header: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  hgroup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  hr: DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
  html: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
  i: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  iframe: DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
  img: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  ins: DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
  kbd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  keygen: DetailedHTMLProps<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
  label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
  legend: DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
  li: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  link: DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
  main: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  map: DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
  mark: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  menu: DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
  menuitem: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  meta: DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
  meter: DetailedHTMLProps<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
  nav: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  noindex: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  noscript: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  object: DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
  ol: DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
  optgroup: DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
  option: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
  output: DetailedHTMLProps<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
  p: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
  param: DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
  picture: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  pre: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
  progress: DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
  q: DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
  rp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  rt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  ruby: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  s: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  samp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  slot: DetailedHTMLProps<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
  script: DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
  section: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  select: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
  small: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  source: DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
  span: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
  strong: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  style: DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
  sub: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  summary: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  sup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  table: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
  template: DetailedHTMLProps<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
  tbody: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
  td: DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
  textarea: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
  tfoot: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
  th: DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
  thead: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
  time: DetailedHTMLProps<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
  title: DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
  tr: DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
  track: DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
  u: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  ul: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
  var: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  video: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
  wbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  webview: DetailedHTMLProps<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
}

type SVGProps<T> = { [K in keyof (SVGAttributes<T> & ClassAttributes<T>)]: State.State<(SVGAttributes<T> & ClassAttributes<T>)[K]> | (SVGAttributes<T> & ClassAttributes<T>)[K] };

interface IntrinsicElementsSVG {
  svg: SVGProps<SVGSVGElement>;
  animate: SVGProps<SVGAnimateElement>;
  animateMotion: SVGProps<SVGAnimateMotionElement>;
  animateTransform: SVGProps<SVGAnimateTransformElement>;
  circle: SVGProps<SVGCircleElement>;
  clipPath: SVGProps<SVGClipPathElement>;
  defs: SVGProps<SVGDefsElement>;
  desc: SVGProps<SVGDescElement>;
  ellipse: SVGProps<SVGEllipseElement>;
  feBlend: SVGProps<SVGFEBlendElement>;
  feColorMatrix: SVGProps<SVGFEColorMatrixElement>;
  feComponentTransfer: SVGProps<SVGFEComponentTransferElement>;
  feComposite: SVGProps<SVGFECompositeElement>;
  feConvolveMatrix: SVGProps<SVGFEConvolveMatrixElement>;
  feDiffuseLighting: SVGProps<SVGFEDiffuseLightingElement>;
  feDisplacementMap: SVGProps<SVGFEDisplacementMapElement>;
  feDistantLight: SVGProps<SVGFEDistantLightElement>;
  feDropShadow: SVGProps<SVGFEDropShadowElement>;
  feFlood: SVGProps<SVGFEFloodElement>;
  feFuncA: SVGProps<SVGFEFuncAElement>;
  feFuncB: SVGProps<SVGFEFuncBElement>;
  feFuncG: SVGProps<SVGFEFuncGElement>;
  feFuncR: SVGProps<SVGFEFuncRElement>;
  feGaussianBlur: SVGProps<SVGFEGaussianBlurElement>;
  feImage: SVGProps<SVGFEImageElement>;
  feMerge: SVGProps<SVGFEMergeElement>;
  feMergeNode: SVGProps<SVGFEMergeNodeElement>;
  feMorphology: SVGProps<SVGFEMorphologyElement>;
  feOffset: SVGProps<SVGFEOffsetElement>;
  fePointLight: SVGProps<SVGFEPointLightElement>;
  feSpecularLighting: SVGProps<SVGFESpecularLightingElement>;
  feSpotLight: SVGProps<SVGFESpotLightElement>;
  feTile: SVGProps<SVGFETileElement>;
  feTurbulence: SVGProps<SVGFETurbulenceElement>;
  filter: SVGProps<SVGFilterElement>;
  foreignObject: SVGProps<SVGForeignObjectElement>;
  g: SVGProps<SVGGElement>;
  image: SVGProps<SVGImageElement>;
  line: SVGProps<SVGLineElement>;
  linearGradient: SVGProps<SVGLinearGradientElement>;
  marker: SVGProps<SVGMarkerElement>;
  mask: SVGProps<SVGMaskElement>;
  metadata: SVGProps<SVGMetadataElement>;
  mpath: SVGProps<SVGElement>;
  path: SVGProps<SVGPathElement>;
  pattern: SVGProps<SVGPatternElement>;
  polygon: SVGProps<SVGPolygonElement>;
  polyline: SVGProps<SVGPolylineElement>;
  radialGradient: SVGProps<SVGRadialGradientElement>;
  rect: SVGProps<SVGRectElement>;
  stop: SVGProps<SVGStopElement>;
  switch: SVGProps<SVGSwitchElement>;
  symbol: SVGProps<SVGSymbolElement>;
  text: SVGProps<SVGTextElement>;
  textPath: SVGProps<SVGTextPathElement>;
  tspan: SVGProps<SVGTSpanElement>;
  use: SVGProps<SVGUseElement>;
  view: SVGProps<SVGViewElement>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends IntrinsicElementsHTML, IntrinsicElementsSVG {}
  }
}
