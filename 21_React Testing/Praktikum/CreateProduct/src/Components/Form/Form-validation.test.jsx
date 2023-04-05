import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Form from "./Form-validation";
import * as userEvent from "@testing-library/user-event"
import { Provider } from "react-redux";
import store from "../redux/store";
import Input from "../../Element/Input/Input";



describe("<Form />", () => {

      test('memberikan input nama produk', () => {
        render(
                <Provider store={store}>
                    <Form  />
                </Provider>  
              )

            const inputproductName = screen.getByTestId('inputproductName')
            expect(inputproductName).toBeInTheDocument();
            expect(inputproductName).toHaveAttribute("type", "text");

      })

      test('Menguji inputan Nama Product', async () => {
        render(
              <Provider store={store}>
                  <Form  />
              </Provider>  
        )

           const user = userEvent.setup()
           //using test id selector
           const inputproductName = screen.getByTestId('inputproductName')

           // test change input
           await user.type(inputproductName, "jaket");

           // test get value
           expect(inputproductName).toHaveValue("jaket");

      })

      test('validasi form input yang benar bahwaProduct Name tidak melebihin 25 karakter', async () => {
        render(
              <Provider store={store}>
                  <Form  />
              </Provider>  
        )
          // using test-id selector
          const inputproductName = screen.getByTestId('inputproductName')

          // test change input value
          fireEvent.change(inputproductName, { target: { value:"inputValue"}});

          // test get value
          expect(inputproductName.value.length).toBeLessThanOrEqual(25);

      })

      test('Test Product Name tidak boleh kosong, tidak mengandung karakter @/#{}',  () => {
        render(
              <Provider store={store}>
                  <Form  />
              </Provider>  
        )
         // using test-id selector
          const inputproductName = screen.getByTestId('inputproductName')
        
          // test change input value
          fireEvent.change(inputproductName, { target: { value:'inputValue@#{}'}});

          // test get value
          expect(inputproductName.value).not.toMatch(/[@#{}]/);


      })

      test('pass valid input type text',  () => {
        
          const {container} = render(
              <Provider store={store}>
                  <Form  />
              </Provider>  
        )
          // using test-id selector
          const inputText = container.querySelector(`input[type="text"]`)

          // test change input value
          fireEvent.change(inputText, { target: { value:'inputValue'}});

          // test get value
          expect(inputText).toHaveValue("inputValue")
        
      })

      test('pass valid input radio',  () => {
        
        const { container } = render(
            <Provider store={store}>
                <Form  />
            </Provider>  
      )
        // using test-id selector
        const inputRadio = container.querySelector('input[type="radio"]');

        // test click input value
        fireEvent.click(inputRadio);
      
        // test get value
        expect(inputRadio).toBeChecked();
      
    })

    test('pass valid input text area', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Form />
        </Provider>,
      );
    
        // Find the textarea element by data-testid attribute
          const textareaLabel = getByTestId('textareaLabel');

          // Test change textarea value
          fireEvent.change(textareaLabel, { target: { value: 'textareaLabel' } });

          // Test get textarea value
          expect(textareaLabel.value).toBe('textareaLabel');

    });

    // test('pass valid input select option', () => {
    //   const { getByTestId } = render(
    //     <Provider store={store}>
    //       <Form />
    //     </Provider>,
    //   );
    
    //   const selectElement = getByTestId('select-option');

    //   // Change select value
    //   fireEvent.change(selectElement, { target: { value: 'option' } });
    
    //   // Verify select value
    //   expect(selectElement).toHaveValue('option');

    // });
    
})