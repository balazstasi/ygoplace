import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import { getCardsByIds, getCardsByName } from '~/lib/api';
import useYuGiStore, { YgoStore } from '~/store/YuGiStore';
import { ToFixLater } from '~/types';
import { Card, YgoProDeckCard } from '~/types/Card';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  const [card, setCard] = useState<YgoProDeckCard[] | null>(null);

  const { selectedCards, setSelectedCards } = useYuGiStore((store: YgoStore) => {
    return {
      selectedCards: store.selectedCards,
      setSelectedCards: store.setSelectedCards,
    };
  });

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div>
            <button
              className="btn btn-primary"
              onClick={async () => {
                const cards = await getCardsByIds(['6983839', '46986421']);
                console.log(cards);
                setSelectedCards(cards);
              }}
            >
              Get Tornado Dragon and Dark Magician by ID
            </button>
            <div className="flex flex-row">
              {selectedCards.map((card: Card) => {
                return <img src={card.pictureUrl} alt={card.name} style={{ width: '200px' }} className="py-4 px-2" />;
              })}
            </div>
            <div className="mt-4 grid gap-2">
              {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
              <button onClick={() => setIsOpen(true)} className="btn btn-primary">
                Display Dialog
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        className="flex fixed inset-0 z-10 overflow-y-auto"
        initialFocus={completeButtonRef}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex items-center justify-center min-h-screen w-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-primary-content max-w-120 p-8 mx-auto rounded-xl">
            <Dialog.Title className="text-xl p-4 text-blue-900 text-center">Dialog Title</Dialog.Title>
            <Dialog.Description className="text-lg px-2 pb-4 text-blue-900 text-center">
              Dialog description
            </Dialog.Description>
            <button
              ref={completeButtonRef}
              type="button"
              className="btn btn-secondary inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Index;
