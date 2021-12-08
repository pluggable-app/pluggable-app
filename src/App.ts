import Library from "./Library";

export default interface App {
    rootComponent: any;
    bootstrap: Function;
    sharedLibs: Map<String, Library>;
    exposedComponents: Map<String, String>;
    remoteComponents: Map<String, String>;
}