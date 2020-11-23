import {PROJECT_ID, PROJECT_SECRET} from '@private/Infura';

import network from './network';

export const httpPoviderUrl = `https://${network}.infura.io/v3/${PROJECT_ID}`;
export const websocketProviderUrl = `wss://${network}.infura.io/ws/v3/${PROJECT_ID}`;
