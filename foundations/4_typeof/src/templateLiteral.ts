// const userName = 'Magrat';

// const greeting = `Hello, ${userName}!`;

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`; // Template literal type
// type FilePermissions = 'no-read-write' | 'read-write' | 'read-no-write' | 'no-read-no-write';

type DataFile = {
    data: string;
    permissions: FilePermissions;
}

type DataFileEventNames = `${keyof DataFile}Changed`; // "dataChanged" | "permissionsChanged"

type DataFileEvents = {
    [Key in DataFileEventNames]: () => void;
}
