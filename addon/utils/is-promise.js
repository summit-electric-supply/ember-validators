import canInvoke from './can-invoke';

export default function isPromise(p) {
  return !!(p && canInvoke(p, 'then'));
}
