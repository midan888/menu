import { Container } from 'inversify';
import { bindAdminModule } from './admin/containerBindings';
import restBindings from './rest/containerBindings';

const container = new Container();

export const getContainer = (): Container => container;

export const initBindings = (): void => {
  bindAdminModule(container);
  restBindings(container);
};
