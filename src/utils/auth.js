var auth = false

export function login () {
  auth = true
}

export function logout () {
  auth = false
}

export function isLoggedIn () {
  return auth
}

export function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
