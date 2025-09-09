import React from 'react';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Card } from './components/ui/Card';
import Dialog from './components/ui/Dialog';

export default function UIDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4 text-theme-primary dark:text-theme-primary-dark">UI Component Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="font-semibold mb-2 text-theme-primary dark:text-theme-primary-dark">Buttons</h2>
          <div className="flex gap-3">
            <Button>Default</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent" onClick={() => setOpen(true)}>Open Dialog</Button>
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold mb-2 text-theme-primary dark:text-theme-primary-dark">Forms</h2>
          <div className="flex flex-col gap-3">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" placeholder="you@example.com" />
          </div>
        </Card>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <h3 className="text-lg font-bold mb-2 text-theme-primary dark:text-theme-primary-dark">Dialog title</h3>
        <p className="text-theme-secondary dark:text-theme-secondary-dark mb-4">This is a simple dialog demo.</p>
        <div className="flex justify-end">
          <Button variant="ghost" onClick={() => setOpen(false)} className="mr-2">Close</Button>
          <Button variant="accent" onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Dialog>
    </div>
  );
}
