export interface Menu {
    showInMenu: boolean;
    position: number;
    Name: string;
    Exec: (selected: Menu) => void;
    Route: string;
    Children: Menu[];
    IconClass: string;
    IconSource: string;
}
