const ONECLICK_CANCEL_SUBMITTED_KEY = 'oneClickCancelSubmitted';
const ONECLICK_CANCEL_QUEUE_KEY = 'oneClickCancelQueue';

// Tampermonkey storage (GM_setValue / GM_getValue / GM_deleteValue)

export function setCancelSubmitted(): void {
    GM_setValue(ONECLICK_CANCEL_SUBMITTED_KEY, true);
}

export function hasCancelSubmitted(): boolean {
    return (GM_getValue(ONECLICK_CANCEL_SUBMITTED_KEY, false) as boolean) === true;
}

export function removeCancelSubmitted(): void {
    GM_deleteValue(ONECLICK_CANCEL_SUBMITTED_KEY);
}

export function getCancelQueue(): string[] {
    const raw = GM_getValue(ONECLICK_CANCEL_QUEUE_KEY, '[]');
    const parsed = JSON.parse(String(raw)) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed as string[];
}

export function addToCancelQueue(subscriptionIds: string[]): void {
    const queue = getCancelQueue();
    queue.push(...subscriptionIds);
    GM_setValue(ONECLICK_CANCEL_QUEUE_KEY, JSON.stringify(queue));
}

export function removeFromCancelQueue(subscriptionId: string): void {
    const queue = getCancelQueue().filter((id) => id !== subscriptionId);
    GM_setValue(ONECLICK_CANCEL_QUEUE_KEY, JSON.stringify(queue));
}
