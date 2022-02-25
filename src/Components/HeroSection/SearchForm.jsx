export const SearchForm = ({name})=>{
    return (
      <div className='hDBgXw'>
        <div className='eajZdi'>
          <form action='' className='gEfRxm'>
            <input
              placeholder={`Enter your ${name} number here`}
              id='Number'
              type='text'
              name='Number'
              autoCapitalize='uppercase'
              className='gXZEoi'
            ></input>
            <button
              type='submit'
              id='submit'
              value='Submit'
              className='bTpPHc'
            ></button>
            <p className='kVBIQU'>Enter your car number</p>
          </form>
          <div className='eEMXSs'>
            <p className='iJgmpa'>Insure now</p>
            <img
              src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.0004 8.32324H14.6472' stroke='white' stroke-width='2.43902' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8.32424 2L14.6476 8.3234L8.32424 14.6468' stroke='white' stroke-width='2.43902' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"
              alt='search icon'
            ></img>
          </div>
        </div>
      </div>
    );
}