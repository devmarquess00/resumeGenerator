'use client';
import { useCallback, useState } from 'react';

export function useSidebar () {
    const [isSidebar, setIsSidebar] = useState(false);

    const showSidebar = useCallback(() => {
        setIsSidebar(prev => true);
    }, []);

    const removeSidebar = useCallback(() => {
        setIsSidebar(prev => false);
    }, [])

    return {
        showSidebar,
        removeSidebar,
        isSidebar
    }
}