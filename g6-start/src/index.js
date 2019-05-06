import { Editor } from 'flow-editor'

const editor = new Editor({
  container: 'diagramContainer',
  dragClass: 'drag-item',
})
const interfaces = [
  {
    name: 'data_load',
    input: [],
    output: 'table',
  },
  {
    name: 'data_sort',
    input: ['table'],
    output: 'table',
  },
  {
    name: 'data_filter',
    input: ['table'],
    output: 'table',
  },
  {
    name: 'data_update',
    input: ['table'],
    output: 'table',
  },
  {
    name: 'data_forecast',
    input: ['table'],
    output: 'table',
  },
  {
    name: 'data_merge',
    input: ['table', 'table'],
    output: 'table',
  },
]
editor.registerInterfaces(interfaces)

const json = {
  processId: '_0030108e-347a-4c0d-923f-e657ede0344d',
  processNodes: [
    {
      className: 'interface-any',
      interface: 'any',
      uuid: 'start',
      virtual: true,
      position: {
        x: 0,
        y: 0,
      },
      ancestors: [],
      successors: ['_c553f378-c75b-4f02-bbb9-5cb09d5289ab'],
      endpointsUuid: {
        top: '_c198187f-5091-4217-b346-92bf594ab75b',
        bottom: '_be05c8bb-e636-4de8-92a2-5f59542df515',
      },
    },
    {
      className: 'interface-any',
      interface: 'any',
      uuid: 'end',
      virtual: true,
      position: {
        x: 0,
        y: 0,
      },
      ancestors: ['_776ae128-cc45-43d3-909f-35b0e7486ed1'],
      successors: [],
      endpointsUuid: {
        top: '_9e5334c7-410d-4c7a-8893-3b26e6daeec7',
        bottom: '_ab718dee-1e8e-4e2d-a9ab-baf5758cc3cf',
      },
    },
    {
      className: 'interface-data_load',
      interface: 'data_load',
      uuid: '_c553f378-c75b-4f02-bbb9-5cb09d5289ab',
      position: {
        x: 107,
        y: 82,
      },
      ancestors: ['start'],
      successors: ['_e0b4d519-cccc-47e0-b2d3-bba9b13bcfa7'],
      endpointsUuid: {
        top: '_b08026c7-d28d-468e-beea-ecaec540ce15',
        bottom: '_fb45e6d6-42b5-430d-b095-e644751a8e90',
      },
    },
    {
      className: 'interface-data_sort',
      interface: 'data_sort',
      uuid: '_e0b4d519-cccc-47e0-b2d3-bba9b13bcfa7',
      position: {
        x: 144,
        y: 223,
      },
      ancestors: ['_c553f378-c75b-4f02-bbb9-5cb09d5289ab'],
      successors: ['_56d9210e-9733-420a-8976-65fdfa8995e3'],
      endpointsUuid: {
        top: '_7ad9d267-6bae-4346-8254-8f441fc748f4',
        bottom: '_1ce1f4d7-f0ee-4ce5-b706-1ae53131cf2c',
      },
    },
    {
      className: 'interface-data_filter',
      interface: 'data_filter',
      uuid: '_56d9210e-9733-420a-8976-65fdfa8995e3',
      position: {
        x: 254,
        y: 303,
      },
      ancestors: ['_e0b4d519-cccc-47e0-b2d3-bba9b13bcfa7'],
      successors: ['_776ae128-cc45-43d3-909f-35b0e7486ed1'],
      endpointsUuid: {
        top: '_ed58c596-fb45-4dd6-82dd-01eb9156a7de',
        bottom: '_bae9ad06-aecd-4864-b039-9ada062e6fdc',
      },
    },
    {
      className: 'interface-data_update',
      interface: 'data_update',
      uuid: '_776ae128-cc45-43d3-909f-35b0e7486ed1',
      position: {
        x: 354,
        y: 422,
      },
      ancestors: ['_56d9210e-9733-420a-8976-65fdfa8995e3'],
      successors: ['end'],
      endpointsUuid: {
        top: '_eb4dd56a-28e1-4ef9-b1fb-07be49b4a5bf',
        bottom: '_7a6cd87b-7aba-49af-b23c-c16e9951d824',
      },
    },
  ],
  connections: [
    [
      '_be05c8bb-e636-4de8-92a2-5f59542df515',
      '_b08026c7-d28d-468e-beea-ecaec540ce15',
    ],
    [
      '_fb45e6d6-42b5-430d-b095-e644751a8e90',
      '_7ad9d267-6bae-4346-8254-8f441fc748f4',
    ],
    [
      '_1ce1f4d7-f0ee-4ce5-b706-1ae53131cf2c',
      '_ed58c596-fb45-4dd6-82dd-01eb9156a7de',
    ],
    [
      '_bae9ad06-aecd-4864-b039-9ada062e6fdc',
      '_eb4dd56a-28e1-4ef9-b1fb-07be49b4a5bf',
    ],
    [
      '_7a6cd87b-7aba-49af-b23c-c16e9951d824',
      '_9e5334c7-410d-4c7a-8893-3b26e6daeec7',
    ],
  ],
}

editor.on('ready', () =>
  editor.load(json, node => {
    node.render(node.interface.name)
  })
)
editor.on('add-node', node => {
  const element = document.createElement('div')
  element.innerHTML = `<i>${node.interface.name}</i>`
  node.render(node.interface.name)
  node.render('aaaaaaaaaaaaaaaaaaa')
})
editor.on('contextmenu', function(node) {
  editor.removeNode(node)
})
// editor.on('click', console.log)
editor.on('dblclick', console.log)

const vm = new Vue({
  el: '#app',
  methods: {
    addItem() {
      const xml = editor.toJson()
      console.log(xml)
    },
  },
})
console.log(vm.$el)
