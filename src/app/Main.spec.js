import Main from './Main.vue';
import moxios from 'moxios';
// import axios from 'axios';
describe('Main', () => {
  beforeEach(() => {
    // import and pass your custom axios instance to this method
    moxios.install();
  });

  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  it('should be a main', () => {
    expect(Main.name).toEqual('Main');
  });
  // it('gets data from api', () => {
  // });
  // it('formato de data deve ser igual modelo api ', () => {
  //   // MOCKAR API
  //   // DEFINIR VARIAVEL BOXARRAY DEVE SER IGUAL A MOCK.
  // });
});
