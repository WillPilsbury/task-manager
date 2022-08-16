const doWork = async () => {
    throw new Error('Something went wrong')
    return 'Will'
}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log('error', e)
})