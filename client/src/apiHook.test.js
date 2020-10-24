import {ApiHook} from './apiHook'
import {act,renderHook} from '@testing-library/react-hooks'


describe("api hook result", ()=>{
    it("should not be null",()=>{
        const {result} = renderHook(ApiHook)

        act(()=>{
            result.current.handleAction()
        })

        expect(!result.current.api).toBeNull
    })
})