import dev from './dev.env'
import prod from './prod.env'


const debug = process.env.NODE_ENV !== 'production'

const config = {
    'production': prod,
    'development': dev
}

var env = config[process.env.NODE_ENV];
env.debug = debug

export default env