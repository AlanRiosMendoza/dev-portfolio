export { };

declare global {
    interface Window {
        showMessage: (options: {
            title: string;
            description: string;
            type: "success" | "error" | "info";
        }) => void;
    }
}