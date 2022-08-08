var     gulp = require('gulp')
    ,   spawn = require('child_process').spawn
    ,   nodemon = require('nodemon')
    
gulp.task('client', () => {
    npmRun.exec("npm run start", 
        { cwd: path.resolve(__dirname, '<clientPath>') })
})

gulp.task('api', () => nodemon({
    script: './bin/www',
    watch: ['./src']
}))

gulp.task('mongo', (callback) => {
    const dbProcess = spawn('mongod')
    dbProcess.on('data',console.log)
    dbProcess.on('close', (code) => {
        console.log(`Database was stopped with code ${code}`)
        callback()
    })
})

gulp.task('dev', gulp.series('mongo', 'api', 'client'))