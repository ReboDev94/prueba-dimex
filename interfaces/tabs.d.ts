export interface ITab {
    title: string
    href: string
    icon: string | ConcreteComponent<{}, any, any, ComputedOptions, MethodOptions, {}, any>
}
