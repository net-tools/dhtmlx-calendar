import { IViewLike, View } from "../../ts-common/view";
import { ICell, ICellConfig, ILayout, LayoutEvents, ILayoutEventHandlersMap } from "./types";
import { IEventSystem } from "../../ts-common/events";
import { ScrollView } from "../../ts-common/ScrollView";
export declare class Cell extends View implements ICell {
    id: string;
    config: ICellConfig;
    events: IEventSystem<LayoutEvents, ILayoutEventHandlersMap>;
    scrollView: ScrollView;
    protected _handlers: {
        [key: string]: (...args: any) => any;
    };
    protected _disabled: string[];
    protected _parent: ILayout;
    protected _ui: IViewLike;
    protected _resizerHandlers: any;
    protected _progress: boolean;
    protected _stopProgressDefault: boolean;
    private _isLastFlexCell;
    private _afterWindowResized;
    constructor(parent: string | HTMLElement | ILayout, config: ICellConfig);
    paint(): void;
    isVisible(): boolean;
    hide(): void;
    show(): void;
    expand(): void;
    collapse(): void;
    toggle(): void;
    protected _checkNextSize(cell?: ICell): any;
    getParent(): ILayout;
    destructor(): void;
    getWidget(): IViewLike;
    getCellView(): any;
    attach(component: any, config?: any): IViewLike;
    attachHTML(html: string): void;
    detach(): void;
    progressShow(): void;
    progressHide(): void;
    isVisibleProgress(): boolean;
    toVDOM(nodes?: any[]): any;
    protected _getProgressBar(): any;
    protected _getCss(_content?: boolean): string;
    protected _initHandlers(): void;
    protected _getCollapsedSize(cell: ICell, nextCell: ICell): number;
    protected _getCollapseIcon(): "dxi dxi-chevron-right" | "dxi dxi-chevron-left" | "dxi dxi-chevron-up" | "dxi dxi-chevron-down";
    protected _isLastCell(): boolean;
    protected _getNextCell(): any;
    protected _getAnyFlexCell(selfInclude?: boolean): any;
    protected _getResizerView(): any;
    protected _isXDirection(): any;
    protected _checkProgress(): boolean;
    protected _checkAutoProgress(): boolean;
    protected _calculateProgressState(): void;
    protected _calculateStyle(): any;
    private _resizedWindow;
    private _resetCellsSize;
}
