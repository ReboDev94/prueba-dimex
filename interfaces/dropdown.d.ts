export type TPositionDropdown = 'top' | 'bottom' | 'right' | 'left'
export type TAlignDropdown = 'start' | 'end' | 'center';
export interface IDefaultToogleDropdown {
    button: boolean
}

export interface IDropdown {
    position?: TPositionDropdown
    align?: TAlignDropdown,
    button?: boolean
    classMenu?: string
}