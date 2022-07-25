export default {
  labels : [
    {
      name : 'Dashboard',
      icon : '',
      path : '/',
      permission : '',
      active : true,
      sub : [
        {
          name : 'Sub 1',
          icon : '',
          path : '/sub-1',
          permission : '',
          active : true,
        },
        {
          name : 'Sub 2',
          icon : '',
          path : '/sub-2',
          permission : '',
          active : true,
        }
      ]
    }
  ]
}

function generatePath(name : string) : string {

  return name.trim().replace(' ', '-').replace(/(^\&)|,/g, '')
}