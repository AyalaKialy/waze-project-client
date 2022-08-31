import React from 'react';
import { UserStore } from './userStore';
import { MapStore } from './mapStore';
import { MarkersStore } from './markersStore';
import { SystemsStore } from './systemsStore';

type RoorStateContextValue = {
    userStore: UserStore;
    mapStore: MapStore;
    markersStore: MarkersStore;
    systemsStore: SystemsStore;
} 

const RoorStateContext = React.createContext<RoorStateContextValue>(
    {} as RoorStateContextValue
);

const userStore = new UserStore();
const mapStore = new MapStore();
const markersStore = new MarkersStore();
const systemsStore = new SystemsStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}) => {
    return (
        <RoorStateContext.Provider value={{ userStore, mapStore, markersStore, systemsStore }} >
            {children}
        </RoorStateContext.Provider>
    );
};

export const useRootState = () => React.useContext(RoorStateContext);
