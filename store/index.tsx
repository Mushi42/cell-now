
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { } from './types';

export const githubStore = create(
    (
        {},
        {
            name: 'search-storage',
            getStorage: () => sessionStorage,
        }
    )
);
