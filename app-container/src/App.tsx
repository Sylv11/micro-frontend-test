import MyButton from 'remoteApp/Button'
import AnotherButton from 'remoteApp2/AnotherButton'


const App = () => (
    <div className="border-4 border-red-300 flex flex-col justify-center h-80">
        <div className='w-full text-center'>APP CONTAINTER</div>
        <div className='flex h-full w-full justify-center items-center gap-3'>
            <div className='basis-1/3 border-purple-700 border-2'>
                <div className='text-center w-full'>APP1 components</div>
                <MyButton/> 
            </div>
            <div className='basis-1/3 border-cyan-700 border-2'>
                <div className='text-center w-full' >APP2 components</div>
                <AnotherButton/> 
            </div>

        </div>
    </div>

)

export default App
