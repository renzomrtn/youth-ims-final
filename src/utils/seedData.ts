import { projectsAPI, budgetAPI, expensesAPI, archivesAPI, personnelAPI, authAPI } from './database';

export async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Seed Users (Authentication)
    const users = [
      {
        username: 'skf_secretary',
        password: 'password123',
        role: 'SKF Secretary',
        fullName: 'SKF Secretary',
      },
      {
        username: 'skf_treasurer',
        password: 'password123',
        role: 'SKF Treasurer',
        fullName: 'SKF Treasurer',
      },
      {
        username: 'skf_auditor',
        password: 'password123',
        role: 'SKF Auditor',
        fullName: 'SKF Auditor',
      },
      {
        username: 'skf_president',
        password: 'password123',
        role: 'SKF President',
        fullName: 'SKF President',
      },
    ];

    for (const user of users) {
      try {
        await authAPI.createUser(user);
        console.log(`Created user: ${user.username}`);
      } catch (error) {
        // User might already exist, continue
        console.log(`User ${user.username} might already exist:`, error);
      }
    }

    // Seed Projects
    const projects = [
      {
        id: 'proj-001',
        projectTitle: 'Youth Leadership Training',
        committeeName: 'Youth Development',
        chairman: 'John Doe',
        viceChairman: 'Jane Smith',
        status: 'In Progress',
        progress: 65,
        startDate: '2024-01-15',
        endDate: '2024-06-30',
        budget: 150000,
      },
      {
        id: 'proj-002',
        projectTitle: 'Community Sports Program',
        committeeName: 'Sports & Recreation',
        chairman: 'Mike Johnson',
        viceChairman: 'Sarah Williams',
        status: 'Planning',
        progress: 25,
        startDate: '2024-02-01',
        endDate: '2024-08-31',
        budget: 200000,
      },
      {
        id: 'proj-003',
        projectTitle: 'Skills Development Workshop',
        committeeName: 'Education',
        chairman: 'Emily Brown',
        viceChairman: 'David Lee',
        status: 'Completed',
        progress: 100,
        startDate: '2023-09-01',
        endDate: '2023-12-15',
        budget: 100000,
      },
    ];

    for (const project of projects) {
      await projectsAPI.create(project);
    }

    // Seed Budget Line Items
    const lineItems = [
      {
        id: 'li-001',
        name: 'Training Materials',
        sourceOfFund: 'Annual',
        budget: 50000,
        utilization: 32500,
        balance: 17500,
        fiscalYear: '2024',
      },
      {
        id: 'li-002',
        name: 'Venue Rental',
        sourceOfFund: 'Supplemental',
        budget: 75000,
        utilization: 60000,
        balance: 15000,
        fiscalYear: '2024',
      },
      {
        id: 'li-003',
        name: 'Equipment Purchase',
        sourceOfFund: 'Annual',
        budget: 120000,
        utilization: 85000,
        balance: 35000,
        fiscalYear: '2024',
      },
    ];

    for (const item of lineItems) {
      await budgetAPI.createLineItem(item);
    }

    // Seed Funds
    const funds = [
      {
        id: 'fund-001',
        budgetType: 'annual',
        fiscalYear: '2024',
        amount: 500000,
        recordId: 'RID-2024-001',
      },
      {
        id: 'fund-002',
        budgetType: 'supplemental',
        fiscalYear: '2024',
        amount: 300000,
        recordId: 'RID-2024-002',
      },
    ];

    for (const fund of funds) {
      await budgetAPI.createFund(fund);
    }

    // Seed Expenses
    const expenses = [
      {
        id: 'exp-001',
        lineItem: 'Training Materials',
        budget: 50000,
        expense: 32500,
        balance: 17500,
        expenseDate: '2024-03-15',
        description: 'Purchase of training modules and handouts',
        status: 'Pending',
      },
      {
        id: 'exp-002',
        lineItem: 'Venue Rental',
        budget: 75000,
        expense: 60000,
        balance: 15000,
        expenseDate: '2024-04-01',
        description: 'Conference hall rental for 3 days',
        status: 'Verified',
        verifiedBy: 'Admin User',
        verifiedAt: '2024-04-05T10:30:00Z',
      },
      {
        id: 'exp-003',
        lineItem: 'Equipment Purchase',
        budget: 120000,
        expense: 85000,
        balance: 35000,
        expenseDate: '2024-03-20',
        description: 'Audio-visual equipment',
        status: 'Flagged',
        flagReason: 'Missing receipts',
        flaggedBy: 'Admin User',
        flaggedAt: '2024-03-25T14:00:00Z',
      },
    ];

    for (const expense of expenses) {
      await expensesAPI.create(expense);
    }

    // Seed Archive Categories
    const categories = [
      {
        id: 'cat-001',
        name: 'Resolutions',
        type: 'resolutions',
      },
      {
        id: 'cat-002',
        name: 'Ordinances',
        type: 'ordinances',
      },
      {
        id: 'cat-003',
        name: 'Minutes',
        type: 'minutes',
      },
    ];

    for (const category of categories) {
      await archivesAPI.createCategory(category);
    }

    // Seed Archive Documents
    const documents = [
      {
        id: 'doc-001',
        category: 'resolutions',
        title: 'Youth Development Resolution 2024-01',
        date: '2024-01-10',
        author: 'Council Secretary',
        description: 'Resolution approving youth development programs',
      },
      {
        id: 'doc-002',
        category: 'ordinances',
        title: 'Budget Ordinance 2024-05',
        date: '2024-02-15',
        author: 'Budget Officer',
        description: 'Annual budget allocation ordinance',
      },
      {
        id: 'doc-003',
        category: 'minutes',
        title: 'Council Meeting Minutes - March 2024',
        date: '2024-03-01',
        author: 'Meeting Secretary',
        description: 'Minutes of the monthly council meeting',
      },
    ];

    for (const doc of documents) {
      await archivesAPI.createDocument(doc);
    }

    // Seed Personnel
    const personnel = [
      {
        id: 'pers-001',
        name: 'John Doe',
        position: 'SK Chairman',
        committee: 'Executive',
        email: 'john.doe@example.com',
        phone: '09123456789',
        status: 'Active',
      },
      {
        id: 'pers-002',
        name: 'Jane Smith',
        position: 'SK Kagawad',
        committee: 'Youth Development',
        email: 'jane.smith@example.com',
        phone: '09198765432',
        status: 'Active',
      },
      {
        id: 'pers-003',
        name: 'Mike Johnson',
        position: 'SK Kagawad',
        committee: 'Sports & Recreation',
        email: 'mike.johnson@example.com',
        phone: '09112345678',
        status: 'Active',
      },
    ];

    for (const person of personnel) {
      await personnelAPI.create(person);
    }

    // Seed Committees
    const committees = [
      {
        id: 'comm-001',
        name: 'Youth Development',
        chairman: 'John Doe',
        members: ['Jane Smith', 'Emily Brown'],
        description: 'Committee focused on youth development programs',
      },
      {
        id: 'comm-002',
        name: 'Sports & Recreation',
        chairman: 'Mike Johnson',
        members: ['Sarah Williams', 'David Lee'],
        description: 'Committee managing sports and recreational activities',
      },
    ];

    for (const committee of committees) {
      await personnelAPI.createCommittee(committee);
    }

    console.log('Database seeding completed successfully!');
    return { success: true, message: 'Database seeded successfully' };
  } catch (error) {
    console.error('Error seeding database:', error);
    return { success: false, error: error.message };
  }
}