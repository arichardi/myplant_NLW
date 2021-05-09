//default system to export content on import
declare module '*.png' {
    const content: any;
    export default  content;
}