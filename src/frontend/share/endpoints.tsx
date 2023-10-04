interface EndPointObject {
  baseUrl: string
  child: {
    [x: string]: string
  }
}

export const userEndpoints: EndPointObject = {
  baseUrl: '/api/users',
  child: {
    authLogin: '/login',
    getList: '/get-list',
    add: '/add-new',
    update: '/update',
    sendForgot: '/send-forgot-password',
    forgot: '/forgot-password',
    delete: '/delete',
    loginCode: '/verify-login-code',
    updatePass: '/update-password',
    loginGoogle: '/login-google',
  },
}

export const classesEndpoint: EndPointObject = {
  baseUrl: '/api/classes',
  child: {
    getList: '/get-list',
    add: '/add-new',
    update: '/update',
    delete: '/delete',
  },
}

export const tasksEndpoint: EndPointObject = {
  baseUrl: '/api/tasks',
  child: {
    getList: '/get-list',
    add: '/add-new',
    update: '/update',
    delete: '/delete',
    active: '/active',
    deactivate: '/deactivate',
    noti: '/send-noti',
  },
}

export const todoEndpoints: EndPointObject = {
  baseUrl: '/api/todo',
  child: {
    getList: '/get-list',
    todo: '/todo',
    delete: '/delete',
  },
}

export const paymentEndpoint: EndPointObject = {
  baseUrl: '/api/payment',
  child: {
    getList: '/get-list',
    create: '/create',
    status: '/status',
    updateStatus: '/update-status',
  },
}

export const getEndpoint = (
  endpointObject: EndPointObject,
  target: keyof typeof endpointObject.child
) => {
  return `${endpointObject.baseUrl}${endpointObject.child[target]}`.replaceAll('//', '/')
}
