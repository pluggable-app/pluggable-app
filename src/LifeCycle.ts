import Library from "./Library";

export default interface LifeCycle {
    bootstrap: Function;
    sharedLibs: Map<String, Library>;
    exposedComponents: Map<String, String>;
    remoteComponents: Map<String, String>;
}