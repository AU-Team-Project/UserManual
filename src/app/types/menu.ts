export interface MenuItem {
    name: string;
    link: string;
}

export interface MenuSection {
    title: string;
    items: MenuItem[];
}