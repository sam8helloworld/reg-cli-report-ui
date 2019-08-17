import React from 'react';
import { RegData } from '../types/reg';
import { EntityContainer } from '../containers/entity/EntityContainer';
import { ViewerContainer } from '../containers/viewer/ViewerContainer';
import { NotificationContainer } from '../containers/notification/NotificationContainer';
import { WorkerClient } from '../worker-client';
import { WorkerContext } from '../context/WorkerContext';
import { SidebarContainer } from '../containers/sidebar/SidebarContainer';
import { App as Component } from './App';

export type Props = {
  data: RegData;
  worker: WorkerClient;
};

export const App: React.FC<Props> = ({ data, worker }) => (
  <WorkerContext.Provider value={worker}>
    <NotificationContainer.Provider>
      <EntityContainer.Provider initialState={data}>
        <SidebarContainer.Provider>
          <ViewerContainer.Provider>
            <Component />
          </ViewerContainer.Provider>
        </SidebarContainer.Provider>
      </EntityContainer.Provider>
    </NotificationContainer.Provider>
  </WorkerContext.Provider>
);
