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
});
