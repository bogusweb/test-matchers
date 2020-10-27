import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input/my-input.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

describe('AppComponent', () => {
  let host: SpectatorHost<MyInputComponent>;
  const createHost = createHostFactory({
    component: MyInputComponent
  });

  it('matchers', () => {
    host = createHost(`<matchers-my-input></matchers-my-input>`);
    const $input = host.queryHost(`input`) as HTMLInputElement;
    $input.focus();
    expect($input).toBeFocused();
  });

  it('matchers1', () => {
    host = createHost(`<matchers-my-input></matchers-my-input>`);
    const $input = host.queryHost<HTMLInputElement>(`input`);
    $input.focus();
    expect($input).toBeFocused();
  });
});
