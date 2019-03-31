import appBox from './application-box.vue';
import {shallowMount} from '@vue/test-utils';

describe('Application Box', () => {
  it('should be a Application box', () => {
    expect(appBox.name).toEqual('appBox');
  });
  it('Should receive application data', () => {
    // DEFINIR PROPS A SEREM RECEBIDAS
  });
  it('Should render application data', () => {
    // DEFINIR DATA A SER RENDERIZADA
  });
});
