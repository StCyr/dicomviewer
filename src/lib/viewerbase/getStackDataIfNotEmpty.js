import { cornerstoneTools } from '../cornerstonejs';
import { getElementIfNotEmpty } from './getElementIfNotEmpty';

export function getStackDataIfNotEmpty(viewportIndex) {
    const element = getElementIfNotEmpty(viewportIndex);
    if (!element) {
        return;
    }

    const stackToolData = cornerstoneTools.getToolState(element, 'stack');
    if (!stackToolData ||
        !stackToolData.data ||
        !stackToolData.data.length) {
        return;
    }

    const stack = stackToolData.data[0];
    if (!stack) {
        return;
    }

    return stack;
}
