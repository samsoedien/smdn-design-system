import { ShallowWrapper } from 'enzyme' // eslint-disable-line

export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => wrapper.find(`[data-test="${val}"]`)

export default findByTestAttr
