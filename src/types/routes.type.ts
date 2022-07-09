export interface IRoute {
	path: string
	element: React.LazyExoticComponent<() => JSX.Element>
}
