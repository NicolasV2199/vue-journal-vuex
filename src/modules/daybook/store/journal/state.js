
export default () => ({

  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quidem aliquid repellat quod odit, culpa architecto. Voluptatem, dolorum minus.',
      picture: null,
    },
    {
      id: new Date().getTime()+1000,
      date: new Date().toDateString(),
      text: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quidem aliquid repellat quod odit, culpa architecto. Voluptatem, dolorum minus.',
      picture: null,
    },
    {
      id: new Date().getTime()+2000,
      date: new Date().toDateString(),
      text: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quidem aliquid repellat quod odit, culpa architecto. Voluptatem, dolorum minus.',
      picture: null,
    },
  ]

})
