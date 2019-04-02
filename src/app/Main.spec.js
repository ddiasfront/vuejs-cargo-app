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
  it('gets data from api', () => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          "id": 123456,
          "customer_tracking_number": "Guia: 276357",
          "time_status": -11.09305555555556,
          "pickup_date": "2019/26/02",
          "delivery_date": 1551344400,
          "estimated_time_of_arrival": 1551344400,
          "manual_input_estimated_time_of_arrival": null,
          "customer": {
            "id": 42510,
            "trade_name": "NOME FANTASIA DO CLIENTE",
            "name": "NOME DO CLIENTE"
          },
          "status_history": [
            {
              "status": "searching-truckers",
              "translation": "Procurando veículo",
              "at": 1551124241,
              "step": null,
              "reason": null,
              "source": "api-event",
              "reason_slug": null
            },
            {
              "status": "trucker-selected",
              "translation": "Veículo encontrado",
              "at": 1551124665,
              "step": null,
              "reason": null,
              "source": "api-event",
              "reason_slug": null
            },
            {
              "status": "scheduled",
              "translation": "Agendado",
              "at": 1551124673,
              "step": 2,
              "reason": null,
              "source": "kmm-calculation",
              "reason_slug": null
            },
            {
              "status": "heading-to-load",
              "translation": "Indo coletar",
              "at": 1551133634,
              "step": 4,
              "reason": null,
              "source": "app-trucker",
              "reason_slug": null
            }
          ],
          "documents": [
            {
              "name": "cte",
              "status": "emitted",
              "at": "2019-02-26 13:29:42"
            },
            {
              "name": "mdfe",
              "status": "emitted",
              "at": "2019-02-26 13:29:59"
            },
            {
              "name": "ct",
              "status": "emitted",
              "at": "2019-02-26 13:32:14"
            },
            {
              "name": "ciot",
              "status": null
            }
          ],
          "payments": [
            {
              "name": "adia",
              "status": "not_ok",
              "at": null
            },
            {
              "name": "canh",
              "status": "not_ok",
              "at": null
            },
            {
              "name": "sald",
              "status": "not_ok",
              "at": null
            }
          ],
          "trucks": [
            {
              "plate": "BXG1977",
              "type": {
                "name": "CAVALO SIMPLES - 2 EIXOS"
              }
            },
            {
              "plate": "JXA7600",
              "type": {
                "name": "SEMI REBOQUE BAU - 2 EIXOS"
              }
            }
          ],
          "trucker": {
            "id": 5956,
            "name": "paulo martinez \/n neto",
            "phone": "5511999999999",
            "has_app": true,
            "trackable_app_status": "trackable",
            "last_app_open_at": "2018-10-02T15:56:16.823311Z",
            "last_app_position_at": "2018-10-02T15:56:16.823311Z",
            "last_app_update_at": "26/02/2019 11:09",
            "first_login_at": "2018-10-02T15:56:16.823311Z",
            "app_version": "v1.40.1",
            "device": {
              "model": null
            }
          },
          "origin": {
            "address": "ROD CAPITAO BARDUINO",
            "city": "BRAGANÇA PAULISTA",
            "latitude": "-22.902336",
            "longitude": "-46.5461533",
            "neighborhood": "CURITIBANOS",
            "city_latitude": "-22.9568955",
            "city_longitude": "-46.54233337398",
            "number": "SN",
            "state": "SP",
            "zip_code": "12900-000",
            "complement": "KM 98 ARMZ 1",
            "store_name": null
          },
          "destination": {
            "address": "AV SOCRATES MARIANI BITTENCOURT",
            "city": "CONTAGEM",
            "latitude": "-19.942321",
            "longitude": "-44.0669793",
            "neighborhood": null,
            "city_latitude": "-19.943445905663",
            "city_longitude": "-44.066344648724",
            "number": "CINCO",
            "state": "MG",
            "zip_code": "32040-000",
            "complement": null,
            "store_name": null
          },
          "salesperson": {
            "id": 1639,
            "name": "DANDARA AQUINO TEIXEIRA"
          },
          "trucker_seeker": {
            "id": 1964,
            "name": "Felipe Alexandre Paraluppi"
          }
        }
      }).then(() => {
        // let list = document.querySelector('.UserList__Data')
        // equal(list.rows.length, 2)
        // equal(list.rows[0].cells[0].innerHTML, 'Fred')
        // equal(list.rows[1].cells[0].innerHTML, 'Wilma')
        done()
      })
    })
  });
  // it('formato de data deve ser igual modelo api ', () => {
  //   // MOCKAR API
  //   // DEFINIR VARIAVEL BOXARRAY DEVE SER IGUAL A MOCK.
  // });
});
