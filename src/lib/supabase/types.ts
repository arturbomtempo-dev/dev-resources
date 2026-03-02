export interface GuestbookEntry {
    id: string;
    name: string;
    message: string;
    created_at: string;
}

export interface GuestbookInsert {
    name: string;
    message: string;
}

export interface Database {
    public: {
        Tables: {
            guestbook: {
                Row: GuestbookEntry;
                Insert: GuestbookInsert;
                Update: Partial<GuestbookInsert>;
            };
        };
        Views: Record<string, never>;
        Functions: Record<string, never>;
        Enums: Record<string, never>;
        CompositeTypes: Record<string, never>;
    };
}
