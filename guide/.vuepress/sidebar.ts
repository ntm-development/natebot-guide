export default {
	'/': [
		{
			text: 'Home',
			children: [
				'/',
				'/about.md',
				'/branding.md',
			],
		},
		{
			text: 'General',
			children: [
				'/general/',
				'/general/commands.md',
				'/general/faq.md',
				'/general/invite.md',
				'/general/contributing.md',
				'/general/updates.md',
				'/general/reset.md',
				'/general/contact.md',
			],
		},
		{
			text: 'Common Problems',
			children: [
				'/common-problems/invite-troubleshooting.md',
				'/common-problems/missing-permissions.md',
				'/common-problems/role-too-low.md',
				'/common-problems/not-responding.md',
				'/common-problems/economy-store-purchase-problems.md',
			],
		},
		{
			text: 'Moderation',
			children: [
				'/moderation/action-command.md',
				'/moderation/undo-command.md',
				'/moderation/warnings.md',
				'/moderation/purging-messages.md',
			],
		},
		{
			text: 'Utility',
			children: [
				'/utility/giveaways.md',
				'/utility/polls.md',
				'/utility/util-command-guide.md',
			],
		},
		{
			text: 'Info',
			children: [
				'/info/link-command-reference.md',
			],
		},
		{
			text: 'Other',
			children: [
				'/other/ranks.md',
				'/other/data-storage.md',
				'/other/extra-statistics.md',
				'/other/natebot-software.md',
			],
		},
	],
};
