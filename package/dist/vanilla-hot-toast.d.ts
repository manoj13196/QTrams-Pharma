import { toast, ToasterProps } from 'react-hot-toast';
export { toast } from 'react-hot-toast';

declare type ExtendedToast = typeof toast & {
    setConfig: (config: Partial<ToasterProps>) => void;
};
declare global {
    interface Window {
        toast: ExtendedToast;
    }
}
declare const startToaster: (config?: ToasterProps | undefined) => void;

export { startToaster };
