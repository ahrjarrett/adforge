import { Print } from '@own-local/ad-utils/lib/types';
export interface PrintContentProps {
    active: boolean;
    print: Print;
}
declare const PrintContent: (props: PrintContentProps) => JSX.Element;
export default PrintContent;
