export interface ListItemProps {
    username: string,
    tag: string,
    title: string,
    time: string,
    details: string,
    going: boolean,
    liked: boolean,
    [property: string]: any
}