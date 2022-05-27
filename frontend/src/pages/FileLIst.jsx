import { FaUpload } from 'react-icons/fa'

function FileList() {
  return (
    <>
      <div className='container'>
        <div className='columns is-vcentered px-6 is-three-quarters-mobile is-two-thirds-tablet is-half-desktop'>
          <div className='column'>
            <h1>FileUpload</h1>
          </div>
          <div classNameName='file column is-8 is-centered'>
            <label className='file-label'>
              <input className='file-input' type='file' name='resume' />
              <span className='file-cta'>
                <span className='file-icon'>
                  <FaUpload />
                </span>
                <span className='file-label'>Choose a file…</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default FileList
