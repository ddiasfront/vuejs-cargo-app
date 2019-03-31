import Main from './Main.vue';
import {shallowMount} from '@vue/test-utils';

describe('Main', () => {
  it('should be a main', () => {
    expect(Main.name).toEqual('Main');
  });
  it('gets data from api', () => {
    const wrapper = shallowMount(Main);
    expect(wrapper.vm.boxArray).toBeDefined();
  });
  it('formato de data deve ser igual modelo api ', () => {
    const wrapper = shallowMount(Main);
    // MOCKAR API
    // DEFINIR VARIAVEL BOXARRAY DEVE SER IGUAL A MOCK.
  });
});
