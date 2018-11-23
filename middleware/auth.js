const whitelist = ['', '/', '/404']

export default function(context) {
  const { isSever, req, redirect, route } = context
  console.log('isSever:', isSever)
  //TODO: dont know why?
  if (isSever && !req) {
    return
  }
  const path = route.path
  if (whitelist.indexOf(path) === -1) {
    redirect && redirect('/404')
  }
}