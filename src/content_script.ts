import { observeDeliveriesContainer } from './deliveries';
import { hasCancelSubmitted, removeCancelSubmitted, removeFromCancelQueue } from './sessionStorage';
import { observeSubscriptionsContainer } from './subscriptions';

void (async () => {
    const search = location.search;

    if (search.includes('snsActionCompleted=cancelSubscription')) {
        // check if we've possibly redirected after a one-click cancel form submission
        if (hasCancelSubmitted()) {
            removeCancelSubmitted();

            const searchParams = new URLSearchParams(location.search);
            const subscriptionId = searchParams.get('subscriptionId');

            if (subscriptionId) {
                removeFromCancelQueue(subscriptionId);
            }

            // automatically redirect back to the "Subscriptions" page for more cancelling
            location.pathname = '/auto-deliveries/subscriptionList';
        }
    }

    observeDeliveriesContainer();
    observeSubscriptionsContainer();
})();
