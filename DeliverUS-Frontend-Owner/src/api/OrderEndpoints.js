import { get, put, patch } from './helpers/ApiRequestsHelper'

function update (orderId, data) {
  return put(`orders/${orderId}/by-owner`, data)
}

function getById (orderId) {
  return get(`orders/${orderId}`)
}

function nextStatus (order) {
  switch (order.status) {
    case 'pending':
      return patch(`/orders/${order.id}/confirm`)
    case 'in process':
      return patch(`/orders/${order.id}/send`)
    case 'sent':
      return patch(`/orders/${order.id}/deliver`)
    default:
      throw new Error('No further state transitions available')
  }
}

export { update, getById, nextStatus }
